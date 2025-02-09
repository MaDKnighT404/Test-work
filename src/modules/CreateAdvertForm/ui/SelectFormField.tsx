import { FieldValues, Path, UseFormReturn } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@shared/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/components/ui/select";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  options: SelectOption[];
  placeholder?: string;

  description?: string;
  descriptionClassName?: string;
};

export const SelectFormField = <T extends FieldValues>({
  form,
  name,
  label,
  options,
  placeholder = "Выберите значение",

  description,
  descriptionClassName,
}: SelectFormFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col sm:gap-4">
            <div className="mt-1 items-start justify-center gap-7 xs:mt-0 xs:grid xs:grid-cols-[200px_1fr]">
              <FormLabel className="xs:pt-4">{label}</FormLabel>
              <div className="flex flex-col">
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="mt-3 sm:mt-0.5">
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
                {description && (
                  <div className="xs:mt-4 xs:pr-1">
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
