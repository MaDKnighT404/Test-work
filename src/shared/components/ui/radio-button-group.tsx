import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@shared/lib/utils";

const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("flex gap-5", className)} {...props} ref={ref} />;
});
ButtonGroup.displayName = RadioGroupPrimitive.Root.displayName;

const ButtonGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { label: string }
>(({ className, label, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "border-input ring-offset-background border-main-gray peer rounded-lg border bg-white px-6 py-[13px] text-sm font-semibold",
      "data-[state=checked]:border-primary data-[state=checked]:bg-main-black data-[state=checked]:text-white",
      "hover:bg-muted hover:text-muted-foreground",
      "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {label}
  </RadioGroupPrimitive.Item>
));
ButtonGroupItem.displayName = "ButtonGroupItem";

export { ButtonGroup, ButtonGroupItem };
