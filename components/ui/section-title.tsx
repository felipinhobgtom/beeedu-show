import type React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 leading-tight font-poppins",
        className,
      )}
    >
      {children}
    </h2>
  )
}
