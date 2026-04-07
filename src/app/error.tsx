"use client";

import { ArrowCounterClockwise } from "@phosphor-icons/react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4">
      <p className="text-label mb-4">Wystąpił błąd</p>

      <h1 className="text-display-sm mb-4 text-center text-3xl md:text-4xl">
        Coś poszło nie tak
      </h1>

      <p className="mb-8 max-w-md text-center text-muted-foreground">
        Przepraszam za utrudnienia. Spróbuj odświeżyć stronę.
      </p>

      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <ArrowCounterClockwise size={20} weight="bold" />
        Spróbuj ponownie
      </button>
    </div>
  );
}
