"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

interface CalendlyEmbedProps {
  url: string
  styles?: React.CSSProperties
}

declare global {
  interface Window {
    Calendly: any
  }
}

export function CalendlyEmbed({ url, styles = {} }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{
            minWidth: "320px",
            height: "700px",
            ...styles,
          }}
        />
      </div>
    </motion.div>
  )
}
