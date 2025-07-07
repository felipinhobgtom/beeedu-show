import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "outline-white"
  size?: "default" | "large"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
          {
            "bg-[#6699FF] text-white hover:bg-[#5588EE] focus-visible:ring-[#6699FF] shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105":
              variant === "primary",
            "bg-white text-[#6699FF] border-2 border-[#6699FF] hover:bg-[#6699FF] hover:text-white focus-visible:ring-[#6699FF] hover:shadow-lg transform hover:-translate-y-1":
              variant === "secondary",
            "bg-white text-[#6699FF] hover:bg-gray-50 focus-visible:ring-white shadow-lg hover:shadow-xl transform hover:-translate-y-1":
              variant === "white",
            "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#6699FF] focus-visible:ring-white transform hover:-translate-y-1":
              variant === "outline-white",
            "px-6 py-3 text-base": size === "default",
            "px-8 py-4 text-lg": size === "large",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export default Button
