import * as React from "react";
import { InputMask } from "@react-input/mask";
import { cn } from "@shared/lib/utils";

export interface InputTelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  notRequired?: boolean;
}

const InputTel = React.forwardRef<HTMLInputElement, InputTelProps>(
  ({ className, notRequired, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="relative inline-flex w-full items-center">
          <InputMask
            mask="8 ___ ___-__-__"
            replacement={{ _: /\d/ }}
            showMask
            placeholder="8 ___ ___-__-__"
            type="tel"
            className={cn(
              "focus:outline-main-green flex w-full max-w-[480px] rounded-lg bg-main-bg px-3 py-[18px] text-sm [font-family:Consolas,_monospace] placeholder:[font-family:Consolas,_monospace] focus:ring-main-black xs:mt-0 sm:text-sm",
              className,
            )}
            ref={ref}
            {...props}
          />
          {!notRequired && <span className="absolute left-[132px] top-[30%] text-red-500">*</span>}
        </div>
      </div>
    );
  },
);

InputTel.displayName = "InputTel";

export { InputTel };
