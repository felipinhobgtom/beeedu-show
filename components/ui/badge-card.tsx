"use client"

import { useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BadgeCardProps {
  name: string
  rarity: string
  color: string
  icon: string | ReactNode
  level?: string
  className?: string
  isSpecial?: boolean
  isWomenOnly?: boolean
}

export default function BadgeCard({
  name,
  rarity,
  color,
  icon,
  level,
  className,
  isSpecial,
  isWomenOnly,
}: BadgeCardProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Mítica":
        return "text-pink-600 bg-pink-100 border-pink-300"
      case "Lendária":
        return "text-yellow-600 bg-yellow-100 border-yellow-300"
      case "Rara":
        return "text-purple-600 bg-purple-100 border-purple-300"
      case "Comum":
        return "text-green-600 bg-green-100 border-green-300"
      default:
        return "text-gray-600 bg-gray-100 border-gray-300"
    }
  }

  return (
    <div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={cn(
          "w-28 h-28 rounded-full bg-gradient-to-br shadow-lg flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl relative overflow-hidden",
          color,
          isSpecial && isWomenOnly && "ring-4 ring-pink-300/50 shadow-2xl rainbow-ring",
          isSpecial && !isWomenOnly && "ring-4 ring-amber-300/50 shadow-2xl",
        )}
      >
        {icon}

        {/* Enhanced shimmer effect for special badge */}
        <div
          className={cn(
            "badge-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full",
            isSpecial && isWomenOnly && "via-pink-200/50",
            isSpecial && !isWomenOnly && "via-amber-200/50",
          )}
        ></div>

        {/* Special glow effect for Queen Bee */}
        {isSpecial && isWomenOnly && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-500/20 animate-pulse rainbow-glow"></div>
        )}

        {/* Regular special glow */}
        {isSpecial && !isWomenOnly && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 animate-pulse"></div>
        )}
      </div>

      {showTooltip && (
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-lg text-xs whitespace-nowrap z-10 shadow-xl">
          <div className="font-semibold mb-1">{name}</div>
          <div className={cn("text-xs px-2 py-1 rounded border inline-block mb-1", getRarityColor(rarity))}>
            {rarity}
          </div>
          {level && <div className="text-xs text-gray-300">{level}</div>}
          {isWomenOnly && <div className="text-xs text-pink-300 mt-1">♀️ Exclusivo para mulheres</div>}
          {isSpecial && <div className="text-xs text-amber-300 mt-1">✨ Insígnia Especial Beeedu</div>}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  )
}
