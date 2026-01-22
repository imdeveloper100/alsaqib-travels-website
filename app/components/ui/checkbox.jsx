"use client";

import * as React from "react";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className={`
          peer h-4 w-4 shrink-0 rounded-sm border-2 border-slate-300
          ring-offset-white focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-slate-950 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          data-[state=checked]:bg-primary-dark data-[state=checked]:border-primary-dark
          data-[state=checked]:text-white
          transition-colors
          ${className || ""}
        `}
        onClick={() => onCheckedChange?.(!checked)}
        ref={ref}
        {...props}
      >
        {checked && (
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        )}
      </button>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
