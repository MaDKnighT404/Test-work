import * as React from "react";

import { cn } from "@shared/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [value, setValue] = React.useState("");

    const showPlaceholder = !isFocused && !value && props.placeholder;

    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            "focus:outline-main-green flex min-h-[160px] w-full max-w-[480px] rounded-md border-0 bg-main-bg p-4 text-base outline-none focus:outline-2 focus:outline-offset-0 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
          placeholder=""
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange?.(e);
          }}
        />
        {showPlaceholder && (
          <div className="text-additional-gray pointer-events-none absolute left-[15px] top-7 -translate-y-1/2 text-sm xs:top-6">
            {props.placeholder}
            {<span className="pl-1 text-red-500">*</span>}
          </div>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
