"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface BackgroundEffectsProps {
  variant?: "hero" | "section" | "dark"
  intensity?: "low" | "medium" | "high"
}

export default function BackgroundEffects({ variant = "section", intensity = "medium" }: BackgroundEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create simple, clean geometric shapes
    const createShape = (index: number) => {
      const shape = document.createElement("div")
      shape.className = "absolute opacity-0 will-change-transform pointer-events-none"

      // Strategic positioning
      const positions = [
        { x: 15, y: 20 },
        { x: 85, y: 25 },
        { x: 25, y: 60 },
        { x: 75, y: 70 },
        { x: 45, y: 15 },
        { x: 65, y: 85 },
      ]

      const pos = positions[index % positions.length]
      shape.style.left = `${pos.x}%`
      shape.style.top = `${pos.y}%`
      shape.style.transform = "translate(-50%, -50%)"

      const size = variant === "hero" ? 8 + Math.random() * 4 : 6 + Math.random() * 3
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`

      const colors = variant === "dark" ? ["#6699FF", "#5588EE"] : ["#FACC15", "#F59E0B"]
      const color = colors[index % colors.length]

      // Simple geometric shapes
      const shapes = [
        `<div class="w-full h-full rounded-full border-2" style="border-color: ${color}40; background: ${color}10;"></div>`,
        `<div class="w-full h-full rotate-45 border-2" style="border-color: ${color}40; background: ${color}10;"></div>`,
        `<div class="w-full h-full rounded border-2" style="border-color: ${color}40; background: ${color}10;"></div>`,
      ]

      shape.innerHTML = shapes[index % shapes.length]
      return shape
    }

    // Create fewer, simpler shapes
    const shapeCount = intensity === "high" ? 6 : intensity === "medium" ? 4 : 2

    for (let i = 0; i < shapeCount; i++) {
      const shape = createShape(i)
      container.appendChild(shape)

      // Simple fade in animation
      gsap.to(shape, {
        opacity: variant === "hero" ? 0.15 : 0.08,
        duration: 2,
        delay: i * 0.5,
        ease: "power2.out",
      })

      // Gentle floating animation
      gsap.to(shape, {
        y: "+=8",
        x: "+=4",
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1.2,
      })
    }

    return () => {
      container.innerHTML = ""
    }
  }, [variant, intensity])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Simple gradient overlay */}
      <div
        className={`absolute inset-0 ${
          variant === "dark"
            ? "bg-gradient-to-br from-[#2F4A60]/3 to-[#6699FF]/3"
            : "bg-gradient-to-br from-amber-50/20 to-yellow-50/10"
        }`}
      ></div>
    </div>
  )
}
