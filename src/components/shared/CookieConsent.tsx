"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "@phosphor-icons/react"

const COOKIE_KEY = "jc-cookie-consent"

type ConsentState = "accepted" | "rejected" | null

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return null
  const value = localStorage.getItem(COOKIE_KEY)
  if (value === "accepted" || value === "rejected") return value
  return null
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_KEY, "accepted")
    setVisible(false)
  }, [])

  const handleReject = useCallback(() => {
    localStorage.setItem(COOKIE_KEY, "rejected")
    setVisible(false)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg sm:left-6 sm:right-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-border p-6 shadow-2xl backdrop-blur-xl"
            style={{ backgroundColor: "oklch(0.16 0.025 232 / 95%)" }}
          >
            {/* Close button */}
            <button
              onClick={handleReject}
              className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Zamknij"
            >
              <X size={16} weight="bold" />
            </button>

            {/* Content */}
            <div className="flex gap-4">
              <div
                className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "oklch(0.65 0.18 210 / 12%)" }}
                aria-hidden="true"
              >
                <Cookie size={20} weight="fill" style={{ color: "var(--cyan)" }} />
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    Pliki cookies
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Używamy plików cookies, aby zapewnić najlepsze doświadczenia na stronie
                    i analizować ruch. Więcej w{" "}
                    <Link
                      href="/polityka-prywatnosci#cookies"
                      className="underline underline-offset-2 transition-colors hover:text-primary"
                      style={{ color: "var(--cyan)" }}
                    >
                      polityce prywatności
                    </Link>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="rounded-full px-5 py-2 text-sm font-semibold transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{
                      backgroundColor: "var(--cyan)",
                      color: "var(--primary-foreground)",
                    }}
                  >
                    Akceptuję
                  </button>
                  <button
                    onClick={handleReject}
                    className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-muted-foreground transition-all hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Odrzucam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
