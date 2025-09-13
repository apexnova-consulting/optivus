import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          className
        ),
        ...props,
      }
    )
  }
)
Container.displayName = "Container"

export { Container }
