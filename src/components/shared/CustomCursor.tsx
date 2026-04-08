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

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [tabindex]:not([tabindex='-1'])"

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
  const styleRef = useRef<HTMLStyleElement | null>(null)

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

    const mql = window.matchMedia("(pointer: fine)")
    if (!mql.matches) return

    // Inject global cursor:none via <style> — no DOM attribute mutations
    const style = document.createElement("style")
    style.textContent = `
      @media (pointer: fine) {
        *, *::before, *::after { cursor: none !important; }
      }
    `
    document.head.appendChild(style)
    styleRef.current = style

    window.addEventListener("mousemove", onMouseMove)

    // Event delegation — no per-element binding, no DOM mutations
    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest(INTERACTIVE_SELECTOR)) {
        onHoverStart()
      }
    }

    function onMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement
      const related = e.relatedTarget as HTMLElement | null
      if (
        target.closest(INTERACTIVE_SELECTOR) &&
        (!related || !target.closest(INTERACTIVE_SELECTOR)?.contains(related))
      ) {
        onHoverEnd()
      }
    }

    document.addEventListener("mouseover", onMouseOver)
    document.addEventListener("mouseout", onMouseOut)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseout", onMouseOut)
      if (styleRef.current) {
        styleRef.current.remove()
        styleRef.current = null
      }
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
