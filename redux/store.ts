import type { Middleware } from "@reduxjs/toolkit";
import type { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { rootReducer, type RootState } from "./root-reducer";
import { persistedReducer, createPersistor } from "./persist";
import type { Persistor } from "redux-persist";
import { setSidebarOpen, toggleSidebar } from "./ui-slice";

const sidebarCookieMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    if (
      typeof window !== "undefined" &&
      (toggleSidebar.match(action) || setSidebarOpen.match(action))
    ) {
      const value = store.getState().ui.sidebarOpen;
      document.cookie = `sidebar-open=${value}; path=/; max-age=31536000`;
    }
    return result;
  };

export type MakeStoreResult = {
  store: ReturnType<typeof configureStore>;
  persistor: Persistor | null;
};

let clientStore: Store<RootState> | null = null;
let clientPersistor: Persistor | null = null;

export function makeStore(initialSidebarOpen?: boolean): MakeStoreResult {
  const isClient = typeof window !== "undefined";
  const preloadedState = {
    ui: { sidebarOpen: initialSidebarOpen ?? true },
  };

  if (!isClient) {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState,
    });
    return { store, persistor: null };
  }

  if (clientStore && clientPersistor) {
    return { store: clientStore, persistor: clientPersistor };
  }

  clientStore = configureStore({
    reducer: persistedReducer,
    preloadedState: preloadedState as never,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sidebarCookieMiddleware),
  });
  clientPersistor = createPersistor(clientStore);
  return { store: clientStore, persistor: clientPersistor };
}

export type AppStore = ReturnType<typeof makeStore>["store"];
export type AppDispatch = AppStore["dispatch"];
export type { RootState };
