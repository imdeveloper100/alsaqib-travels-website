"use client";

import * as React from "react";

const buttonVariants = {
  default: "bg-primary-dark text-white hover:bg-accent-dark",
  ghost: "hover:bg-gray-100 hover:text-foreground",
  outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`
          inline-flex items-center justify-center rounded-md
          text-sm font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-slate-950 focus-visible:ring-offset-2
          disabled:pointer-events-none disabled:opacity-50
          ${buttonVariants[variant] || buttonVariants.default}
          ${buttonSizes[size] || buttonSizes.default}
          ${className}
        `}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
