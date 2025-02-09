import { FieldValues, Path, UseFormReturn } from "react-hook-form";

import { PhotoCollection } from "../components/PhotoCollection";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@shared/components/ui/form";
import { InputFile } from "@shared/components/ui/input-file";

type FileUploadFormFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  description?: string;
  descriptionClassName?: string;
  accept?: string;
  maxFiles?: number;
};

export const FileUploadFormField = <T extends FieldValues>({
  form,
  name,
  label,
  description,
  descriptionClassName,

  accept = "image/*",
  maxFiles = 10,
}: FileUploadFormFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col sm:gap-4">
            <div className="items-start justify-center gap-6 xs:grid xs:grid-cols-[200px_1fr] xs:gap-7">
              <FormLabel className="xs:pt-[13px]">{label}</FormLabel>
              <div className="flex flex-col">
                <FormControl>
                  <div className="mt-3 inline-flex flex-wrap gap-4 xs:mt-0">
                    <PhotoCollection
                      photos={field.value || []}
                      onPhotoRemove={(index) => {
                        const newPhotos = [...field.value];
                        newPhotos.splice(index, 1);
                        field.onChange(newPhotos);
                      }}
                    />
                    {(!field.value || field.value.length < maxFiles) && (
                      <InputFile
                        onChange={(e) => {
                          const newFiles = e.target.files ? Array.from(e.target.files) : [];
                          const availableSlots = maxFiles - (field.value?.length || 0);
                          const filesToAdd = newFiles.slice(0, availableSlots);

                          if (filesToAdd.length > 0) {
                            field.onChange(
                              field.value ? [...field.value, ...filesToAdd] : filesToAdd,
                            );
                          }
                        }}
                        accept={accept}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
                {description && (
                  <div className="mt-2 xs:mt-4 xs:pr-1">
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
