import { FieldValues, Path, UseFormReturn } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@shared/components/ui/form";
import { Textarea } from "@shared/components/ui/textarea";

type TextAreaFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string;
  descriptionClassName?: string;
};

export const TextAreaFormField = <T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  description,
  descriptionClassName,
}: TextAreaFormFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col sm:gap-4">
            <div className="flex flex-col items-start justify-center gap-3 xs:mt-0 xs:grid xs:grid-cols-[200px_1fr] xs:gap-7">
              <FormLabel className="xs:pt-3">{label}</FormLabel>
              <div className="flex flex-col">
                <FormControl>
                  <Textarea placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
                {description && (
                  <div className="mt-2.5 pr-1 leading-4.5 xs:mt-4">
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
