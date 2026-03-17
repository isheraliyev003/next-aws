import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telegram Bot",
  description: "Telegram bot configuration",
};

export default function TelegramPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Telegram Bot</h1>
      <p className="text-muted-foreground">Telegram bot configuration goes here.</p>
    </div>
  );
}
