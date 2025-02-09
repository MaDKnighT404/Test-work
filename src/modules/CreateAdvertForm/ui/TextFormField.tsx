import { FieldValues, Path, UseFormReturn } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@shared/components/ui/form";
import { Input } from "@shared/components/ui/input";

type TextFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  description?: string;
  descriptionClassName?: string;
  notRequired?: boolean;
};

export const TextFormField = <T extends FieldValues>({
  form,
  name,
  label,
  type = "text",
  placeholder,
  description,
  descriptionClassName,
  notRequired = false,
}: TextFormFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col sm:gap-4">
            <div className="flex flex-col items-start justify-center gap-3 xs:grid xs:grid-cols-[200px_1fr] xs:gap-7">
              <FormLabel className="xs:pt-3.5">{label}</FormLabel>
              <div className="flex w-full flex-col">
                <FormControl>
                  <Input
                    type={type}
                    placeholder={placeholder}
                    notRequired={notRequired}
                    {...field}
                  />
                </FormControl>
                <FormMessage />

                {description && (
                  <div className="mt-2.5 xs:mt-4 xs:pr-1">
                    <FormDescription className={descriptionClassName}>
                      {description}
                    </FormDescription>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};
