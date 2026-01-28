"use client"

import { ReactLenis } from "lenis/react"
import type { LenisOptions } from "lenis"

interface SmoothScrollProps {
    children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisOptions: LenisOptions = {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
    }

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    )
}
