"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Step {
  target: string
  title: string
  content: string
  placement: "top" | "bottom" | "left" | "right"
}

const steps: Step[] = [
  {
    target: "[data-tour='dashboard-kpis']",
    title: "Key Performance Indicators",
    content:
      "Track your AI tool adoption metrics, including usage rates, time savings, and ROI calculations.",
    placement: "bottom",
  },
  {
    target: "[data-tour='roi-calculator']",
    title: "ROI Calculator",
    content:
      "Calculate and visualize the return on investment for your AI tools based on actual usage data.",
    placement: "right",
  },
  {
    target: "[data-tour='nudge-engine']",
    title: "Nudge Engine",
    content:
      "Create and manage automated nudges to drive tool adoption across your organization.",
    placement: "left",
  },
  {
    target: "[data-tour='team-analytics']",
    title: "Team Analytics",
    content:
      "View detailed analytics about tool usage patterns across different teams and departments.",
    placement: "top",
  },
]

export function ProductTour() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    // Check if tour has been completed
    const tourCompleted = localStorage.getItem("productTourCompleted")
    if (!tourCompleted) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const targetElement = document.querySelector(steps[currentStep].target)
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect()
        const { placement } = steps[currentStep]

        let top = rect.top
        let left = rect.left

        switch (placement) {
          case "top":
            top = rect.top - 10 - 150 // height of tooltip
            left = rect.left + rect.width / 2 - 150 // half width of tooltip
            break
          case "bottom":
            top = rect.bottom + 10
            left = rect.left + rect.width / 2 - 150
            break
          case "left":
            top = rect.top + rect.height / 2 - 75 // half height of tooltip
            left = rect.left - 10 - 300 // width of tooltip
            break
          case "right":
            top = rect.top + rect.height / 2 - 75
            left = rect.right + 10
            break
        }

        setPosition({ top, left })
      }
    }
  }, [currentStep, isVisible])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    setIsVisible(false)
    localStorage.setItem("productTourCompleted", "true")
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-50" />

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              top: position.top,
              left: position.left,
            }}
            className="fixed z-50 w-[300px] bg-white rounded-lg shadow-xl"
          >
            <div className="p-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {steps[currentStep].title}
                </h3>
                <button
                  onClick={handleComplete}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {steps[currentStep].content}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Step {currentStep + 1} of {steps.length}
                </div>
                <Button onClick={handleNext}>
                  {currentStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
