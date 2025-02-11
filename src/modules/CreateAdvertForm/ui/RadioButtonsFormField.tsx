import { FieldValues, Path, UseFormReturn } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@shared/components/ui/form";
import { ButtonGroup, ButtonGroupItem } from "@shared/components/ui/radio-button-group";

interface RadioOption {
  value: string;
  label: string;
}

type RadioButtonsFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  options: RadioOption[];
  description?: React.ReactNode;
  descriptionClassName?: string;
};

export const RadioButtonsFormField = <T extends FieldValues>({
  form,
  name,
  label,
  options,
  description,
  descriptionClassName,
}: RadioButtonsFormFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col sm:gap-4">
            <div className="flex flex-col items-start justify-center gap-2 xs:grid xs:grid-cols-[200px_1fr] xs:gap-[27px]">
              <FormLabel className="xs:pt-3 lg:pt-4">{label}</FormLabel>
              <div className="flex flex-col">
                <FormControl>
                  <ButtonGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="mt-0.5 flex gap-2.5"
                  >
                    {options.map((option) => (
                      <ButtonGroupItem
                        key={option.value}
                        value={option.value}
                        id={option.value}
                        label={option.label}
                      />
                    ))}
                  </ButtonGroup>
                </FormControl>
                <div className="mt-2 xs:mt-4">
                  <FormMessage />
                  <FormDescription className={descriptionClassName}>{description}</FormDescription>
                </div>
              </div>
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};
