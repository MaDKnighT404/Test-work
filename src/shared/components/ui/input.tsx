import * as React from "react";

import { cn } from "@shared/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { notRequired?: boolean }
>(({ className, type, notRequired, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState("");

  const showPlaceholder = !isFocused && !value && props.placeholder;

  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "focus:outline-main-green flex w-full max-w-[480px] rounded-lg bg-main-bg px-3 py-[18px] text-sm focus:ring-main-black xs:mt-0 sm:text-sm",
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
        <div className="text-additional-gray pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2 text-sm">
          {props.placeholder}
          {!notRequired && <span className="pl-1 text-red-500">*</span>}
        </div>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
