"use client"

import { useCallback, useEffect, useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion"

const CURSOR_SIZE = 16
const CURSOR_RING_SIZE = 40

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  const isHovering = useRef(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    },
    [mouseX, mouseY]
  )

  const onHoverStart = useCallback(() => {
    isHovering.current = true
    if (ringRef.current) {
      ringRef.current.style.transform = "translate(-50%, -50%) scale(1.6)"
      ringRef.current.style.borderColor = "oklch(0.65 0.18 210 / 60%)"
      ringRef.current.style.boxShadow =
        "0 0 20px oklch(0.65 0.18 210 / 25%), inset 0 0 8px oklch(0.65 0.18 210 / 10%)"
    }
    if (dotRef.current) {
      dotRef.current.style.transform = "translate(-50%, -50%) scale(0.5)"
      dotRef.current.style.background = "oklch(0.75 0.20 210)"
    }
  }, [])

  const onHoverEnd = useCallback(() => {
    isHovering.current = false
    if (ringRef.current) {
      ringRef.current.style.transform = "translate(-50%, -50%) scale(1)"
      ringRef.current.style.borderColor = "oklch(0.65 0.18 210 / 30%)"
      ringRef.current.style.boxShadow = "none"
    }
    if (dotRef.current) {
      dotRef.current.style.transform = "translate(-50%, -50%) scale(1)"
      dotRef.current.style.background = "oklch(0.65 0.18 210)"
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    // Only show on desktop (coarse pointer = touch, fine = mouse)
    const mql = window.matchMedia("(pointer: fine)")
    if (!mql.matches) return

    document.documentElement.style.cursor = "none"

    window.addEventListener("mousemove", onMouseMove)

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])'

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        const htmlEl = el as HTMLElement
        if (!htmlEl.dataset.cursorBound) {
          htmlEl.dataset.cursorBound = "1"
          htmlEl.style.cursor = "none"
          htmlEl.addEventListener("mouseenter", onHoverStart)
          htmlEl.addEventListener("mouseleave", onHoverEnd)
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Initial bind
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.dataset.cursorBound = "1"
      htmlEl.style.cursor = "none"
      htmlEl.addEventListener("mouseenter", onHoverStart)
      htmlEl.addEventListener("mouseleave", onHoverEnd)
    })

    return () => {
      document.documentElement.style.cursor = ""
      window.removeEventListener("mousemove", onMouseMove)
      observer.disconnect()
      document.querySelectorAll("[data-cursor-bound]").forEach((el) => {
        const htmlEl = el as HTMLElement
        htmlEl.style.cursor = ""
        htmlEl.removeEventListener("mouseenter", onHoverStart)
        htmlEl.removeEventListener("mouseleave", onHoverEnd)
        delete htmlEl.dataset.cursorBound
      })
    }
  }, [prefersReducedMotion, onMouseMove, onHoverStart, onHoverEnd])

  if (prefersReducedMotion) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden rounded-full md:block"
        style={{
          left: mouseX,
          top: mouseY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          x: "-50%",
          y: "-50%",
          background: "oklch(0.65 0.18 210)",
          mixBlendMode: "screen",
          transition: "transform 0.15s ease, background 0.2s ease",
        }}
        aria-hidden="true"
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden rounded-full md:block"
        style={{
          left: ringX,
          top: ringY,
          width: CURSOR_RING_SIZE,
          height: CURSOR_RING_SIZE,
          x: "-50%",
          y: "-50%",
          border: "1.5px solid oklch(0.65 0.18 210 / 30%)",
          transition:
            "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.2s ease, box-shadow 0.2s ease",
        }}
        aria-hidden="true"
      />
    </>
  )
}
