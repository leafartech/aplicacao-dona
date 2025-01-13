'use client'

import { Check } from 'lucide-react'
import { motion } from "framer-motion"

interface Step {
  id: number
}

interface ProgressBarProps {
  steps: Step[]
  currentStep: number
  showPercentage?: boolean
}

export default function ProgressBar({
  steps,
  currentStep,
  showPercentage = false,
}: ProgressBarProps) {
  const percentage = Math.round(((currentStep - 1) / (steps.length - 1)) * 100)

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="relative">
        <div
          className="absolute top-5 left-0 w-full h-1 bg-muted"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          tabIndex={0}
        >
          <motion.div
            className="absolute left-0 top-0 h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isCompleted = currentStep > step.id
            const isCurrent = currentStep === step.id

            return (
              <div
                key={step.id}
                className="flex flex-col items-center"
                style={{ width: `${100 / steps.length}%` }}
              >
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300 ${
                    isCompleted
                      ? "bg-primary border-primary"
                      : isCurrent
                      ? "bg-background border-primary"
                      : "bg-background border-muted-foreground"
                  }`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <span
                      className={`text-sm font-medium ${
                        isCurrent ? "text-primary" : "text-zinc-300"
                      }`}
                    >
                      {step.id}
                    </span>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {showPercentage && (
        <div
          className="mt-8 text-center text-sm text-zinc-300"
          aria-live="polite"
        >
          Passo {currentStep} de {steps.length} ({percentage}% Completos)
        </div>
      )}
    </div>
  )
}

