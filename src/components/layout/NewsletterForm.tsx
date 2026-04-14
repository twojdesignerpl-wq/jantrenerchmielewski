"use client"

import * as React from "react"
import { PaperPlaneTilt } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function NewsletterForm() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    // TODO: integrate with newsletter API
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-label text-[oklch(0.55_0.02_232)]">
        Zapisz się na porady treningowe
      </h3>

      {submitted ? (
        <p className="font-[family-name:var(--font-sans)] text-sm text-[var(--cyan)]">
          Dziękuję za zapis! Wkrótce otrzymasz pierwsze porady.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
          <label htmlFor="footer-newsletter-email" className="sr-only">
            Adres e-mail
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            required
            placeholder="Twój adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "h-10 flex-1 rounded-lg border border-[oklch(0.28_0.025_232)] bg-[oklch(0.12_0.02_232)] px-4",
              "font-[family-name:var(--font-sans)] text-sm text-foreground placeholder:text-[oklch(0.45_0.02_232)]",
              "transition-colors duration-200",
              "focus:border-[var(--cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)/30%]",
              "sm:max-w-xs"
            )}
          />
          <button
            type="submit"
            className={cn(
              "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-5",
              "bg-[var(--cyan)] font-[family-name:var(--font-sans)] text-sm font-semibold text-[oklch(0.14_0.025_232)]",
              "transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--cyan-glow)] hover:shadow-[0_0_20px_oklch(0.65_0.18_210/25%)]",
              "active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.11_0.02_232)]"
            )}
          >
            <PaperPlaneTilt size={16} weight="bold" aria-hidden="true" />
            Zapisz się
          </button>
        </form>
      )}

      {!submitted && (
        <p className="font-[family-name:var(--font-sans)] text-xs text-[oklch(0.42_0.02_232)]">
          Żadnego spamu — tylko wartościowe treści.
        </p>
      )}
    </div>
  )
}
