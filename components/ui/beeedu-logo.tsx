"use client"

interface BeeduLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
}

export default function BeeduLogo({ className = "", size = "lg" }: BeeduLogoProps) {
  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-[#6699FF]">BEEEDU</span>
      
    </div>
  )
}
