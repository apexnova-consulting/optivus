import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-optivus-dark/20 bg-white px-4 py-3 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-optivus-dark/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-optivus-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-optivus-light/20 dark:bg-optivus-dark dark:ring-offset-optivus-dark dark:placeholder:text-optivus-light/40 dark:focus-visible:ring-optivus-teal",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
