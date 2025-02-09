import * as React from "react";

import { cn } from "@shared/lib/utils";

const InputFile = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, forwardedRef) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(forwardedRef, () => inputRef.current!, []);

    const handleClick = () => {
      inputRef.current?.click();
    };

    return (
      <div
        className={cn(
          "relative h-[90px] w-[120px] cursor-pointer rounded-lg bg-main-bg",
          className,
        )}
        onClick={handleClick}
      >
        <div className="flex h-full items-center justify-center">
          <img src="./assets/svgs/photo.svg" alt="Добавить фото" className="h-6 w-6" />
        </div>
        <input
          multiple
          type="file"
          accept=".jpg, .jpeg, .png, .webp"
          className="hidden"
          ref={inputRef}
          {...props}
        />
      </div>
    );
  },
);

InputFile.displayName = "InputFile";

export { InputFile };
