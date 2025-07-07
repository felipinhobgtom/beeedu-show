"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import BeeduLogo from "./ui/beeedu-logo"

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-content", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 w-full">
          {/* Centered Logo */}
          <div className="header-content">
            <BeeduLogo width={280} height={50} className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </header>
  )
}
