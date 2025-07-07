"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface EcosystemCardProps {
  title: string
  icon: string
  description: string
  color: string
  className?: string
}

const iconMap = {
  book: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9L12 15L21 12V17H23V10L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
    </svg>
  ),
  tool: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z" />
    </svg>
  ),
  trophy: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
    </svg>
  ),
  rocket: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.81 14.12L5.64 11.29L8.17 10.79C11.39 6.41 17.55 5.54 19.77 7.76C22 10 21.12 16.15 16.74 19.37L16.24 21.9L13.41 19.07L14.54 16.54L11.88 13.88L9.35 15.01L6.52 12.18L9.05 11.68C7.92 9.95 7.65 7.73 8.23 5.79C8.31 5.58 8.39 5.37 8.5 5.17C9.36 3.85 10.71 2.81 12.29 2.21C12.5 2.14 12.71 2.08 12.92 2.04C13.64 1.89 14.38 1.87 15.11 1.98C15.84 2.09 16.54 2.33 17.18 2.69C17.82 3.05 18.39 3.52 18.86 4.08C19.33 4.64 19.69 5.28 19.93 5.97C20.17 6.66 20.29 7.38 20.28 8.11C20.27 8.84 20.13 9.56 19.87 10.23C19.61 10.9 19.24 11.52 18.77 12.05C18.3 12.58 17.74 13.01 17.11 13.32C16.48 13.63 15.79 13.82 15.09 13.88C14.39 13.94 13.69 13.87 13.02 13.68L12.18 14.52L9.35 15.01L6.52 12.18L9.05 11.68C7.92 9.95 7.65 7.73 8.23 5.79L2.81 14.12Z" />
    </svg>
  ),
}

export default function EcosystemCard({ title, icon, description, color, className }: EcosystemCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-pointer hover:border-[#6699FF]/30 hover:shadow-lg hover:scale-[1.02] opacity-100 visible",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center relative z-10">
        <div
          className={cn(
            "w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 text-white shadow-md",
            `bg-gradient-to-br ${color}`,
            isHovered && "scale-110 shadow-lg",
          )}
        >
          {iconMap[icon as keyof typeof iconMap]}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover effect overlay */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6699FF]/5 to-[#2F4A60]/5 pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  )
}
