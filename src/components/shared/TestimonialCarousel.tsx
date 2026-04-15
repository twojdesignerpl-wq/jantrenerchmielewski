"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import {
  motion,

  useReducedMotion,
  useMotionValue,
  useAnimation,
  type PanInfo,
} from "framer-motion"
import { Star } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { testimonials, type Testimonial } from "@/lib/data/testimonials"

const CARD_GAP = 16
const AUTO_SCROLL_INTERVAL = 5000

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Ocena ${rating} z 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          weight={i < rating ? "fill" : "regular"}
          className={cn(
            "size-4",
            i < rating ? "text-amber-400" : "text-muted-foreground/40"
          )}
        />
      ))}
    </div>
  )
}

function truncateQuote(quote: string, maxLength = 120): string {
  if (quote.length <= maxLength) return quote
  const truncated = quote.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return `${truncated.slice(0, lastSpace)}...`
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  return (
    <motion.article
      className={cn(
        "flex-shrink-0 flex flex-col gap-4 rounded-2xl border border-border p-6",
        "w-[calc(100vw-3.6rem)] sm:w-[calc(50vw-2rem)] lg:w-[calc(33.333%-1rem)]"
      )}
      style={{
        backgroundColor: "var(--card)",
        boxShadow: "inset 0 0 0 1px oklch(0.65 0.18 210 / 6%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: index * 0.08,
      }}
    >
      <StarRating rating={testimonial.rating} />

      <blockquote className="text-sm leading-relaxed text-foreground/90">
        &ldquo;{truncateQuote(testimonial.quote)}&rdquo;
      </blockquote>

      <div className="mt-auto flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {testimonial.city}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: "oklch(0.65 0.18 210 / 12%)",
              color: "var(--cyan)",
            }}
          >
            {testimonial.service}
          </span>
          <span className="inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
            {testimonial.result}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export function TestimonialCarousel({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const controls = useAnimation()
  const x = useMotionValue(0)

  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)

  const calculateMaxIndex = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return 0
    const trackWidth = trackRef.current.scrollWidth
    const containerWidth = containerRef.current.offsetWidth
    const cardWidth = trackRef.current.firstElementChild
      ? (trackRef.current.firstElementChild as HTMLElement).offsetWidth + CARD_GAP
      : 300
    return Math.max(0, Math.ceil((trackWidth - containerWidth) / cardWidth))
  }, [])

  useEffect(() => {
    const update = () => setMaxIndex(calculateMaxIndex())
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [calculateMaxIndex])

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!trackRef.current) return
      const card = trackRef.current.firstElementChild as HTMLElement | null
      if (!card) return
      const cardWidth = card.offsetWidth + CARD_GAP
      const clampedIndex = Math.max(0, Math.min(index, maxIndex))
      setCurrentIndex(clampedIndex)
      controls.start({
        x: -clampedIndex * cardWidth,
        transition: { type: "spring", stiffness: 200, damping: 30 },
      })
    },
    [controls, maxIndex]
  )

  // Auto-scroll
  useEffect(() => {
    if (prefersReducedMotion || isHovered || isDragging || maxIndex === 0) return

    const interval = setInterval(() => {
      const next = currentIndex >= maxIndex ? 0 : currentIndex + 1
      scrollToIndex(next)
    }, AUTO_SCROLL_INTERVAL)

    return () => clearInterval(interval)
  }, [
    currentIndex,
    maxIndex,
    isHovered,
    isDragging,
    prefersReducedMotion,
    scrollToIndex,
  ])

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    setIsDragging(false)
    const threshold = 50
    if (info.offset.x < -threshold && currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1)
    } else if (info.offset.x > threshold && currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    } else {
      scrollToIndex(currentIndex)
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{
          left: -(maxIndex * 320),
          right: 0,
        }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
        ))}
      </motion.div>

      {/* Dot indicators */}
      <div
        className="mt-6 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Nawigacja opinii"
      >
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Pokaż opinię ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === currentIndex
                ? "w-6"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            style={
              i === currentIndex
                ? { backgroundColor: "var(--cyan)" }
                : undefined
            }
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
