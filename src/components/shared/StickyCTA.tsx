"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { Phone, X } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 600

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isDismissed) return
    setIsVisible(latest > SCROLL_THRESHOLD)
  })

  // Observe footer visibility
  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const shouldShow = isVisible && !isDismissed && !isFooterVisible

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className={cn(
            "fixed z-40",
            "bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6"
          )}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        >
          <div
            className={cn(
              "relative flex items-center gap-3 border-t border-border md:border md:rounded-2xl",
              "px-4 py-3 md:px-5 md:py-3.5",
              "backdrop-blur-xl"
            )}
            style={{
              backgroundColor: "oklch(0.16 0.025 232 / 85%)",
            }}
          >
            {/* Phone link — mobile */}
            <a
              href="tel:+48534214398"
              className={cn(
                "inline-flex items-center justify-center rounded-full p-2.5",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 transition-opacity",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "md:hidden"
              )}
              aria-label="Zadzwoń"
            >
              <Phone weight="bold" className="size-5" />
            </a>

            {/* CTA link */}
            <Link
              href="/kontakt"
              className={cn(
                "inline-flex flex-1 items-center justify-center gap-2 rounded-full",
                "bg-primary text-primary-foreground",
                "px-5 py-2.5 text-sm font-semibold",
                "hover:opacity-90 transition-opacity",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
              style={{
                boxShadow: "0 0 24px oklch(0.65 0.18 210 / 25%)",
              }}
            >
              <Phone weight="bold" className="size-4 hidden md:block" />
              <span>Zacznij teraz — bezpłatna konsultacja</span>
            </Link>

            {/* Dismiss button */}
            <button
              onClick={() => setIsDismissed(true)}
              className={cn(
                "inline-flex items-center justify-center rounded-full p-1.5",
                "text-muted-foreground hover:text-foreground transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label="Zamknij"
            >
              <X weight="bold" className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
