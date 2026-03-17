import type { Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { Persistor } from "redux-persist";
import type { RootState } from "./root-reducer";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [] as string[],
};

export const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer
);

export function createPersistor(store: Store<RootState>): Persistor {
  return persistStore(store);
}
