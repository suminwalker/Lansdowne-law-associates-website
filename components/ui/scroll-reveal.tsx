"use client"

import { motion } from "framer-motion"

interface ScrollRevealProps {
    children: React.ReactNode
    delay?: number
    direction?: "up" | "down"
    distance?: number
    duration?: number
    className?: string
}

export function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    distance = 15,
    duration = 0.6,
    className = "",
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: direction === "up" ? distance : -distance,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Subtle ease-out
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
