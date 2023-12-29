import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-dark-blue border- text-white hover:bg-dark-blue/90 ",
        defaultSecondary:
          "hover:bg-dark-blue text-dark-blue hover:text-white border-dark-blue border-2",
        light:
          "bg-light-blue text-white hover:bg-light-blue/90",
        lightSecondary:
          "bg-transparent text-white hover:bg-light-blue/90 border-light-blue border-2",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-dark-blue underline-offset-4 hover:underline",
        ligthLink: "text-light-blue underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-[44px] px-5 rounded-[8px]",
        default: "h-[52px] px-6 py-2 rounded-[8px]",
        lg: "h-[60px] px-8 rounded-[12px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants };
