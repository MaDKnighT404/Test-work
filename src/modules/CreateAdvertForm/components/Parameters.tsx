import { UseFormReturn } from "react-hook-form";

import { TextFormField } from "../ui/TextFormField";
import { RadioButtonsFormField } from "../ui/RadioButtonsFormField";
import { SelectFormField } from "../ui/SelectFormField";

import { useMediaQuery } from "@shared/hooks/use-media-query";

import { FormValues } from "../types";

export const Parameters = ({ form }: { form: UseFormReturn<FormValues> }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex flex-col gap-1 sm:mt-1 sm:gap-3">
      <h2 className="text-lg font-semibold sm:text-2xl">Параметры</h2>
      <div className="mt-3 flex flex-col gap-4 sm:gap-5">
        <TextFormField
          form={form}
          name="title"
          label="Название объявления"
          placeholder="Название"
          description="Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»"
        />

        <RadioButtonsFormField
          form={form}
          name="condition"
          label="Состояние"
          options={[
            { value: "new", label: "Новое" },
            { value: "used", label: "Б/У" },
          ]}
          description={<a href="#">Какую вещь можно считать новой</a>}
          descriptionClassName="underline underline-offset-[2px]"
        />

        {isDesktop ? (
          <RadioButtonsFormField
            form={form}
            name="type"
            label="Вид объявления"
            options={[
              { value: "personal", label: "Продаю свое" },
              { value: "resale", label: "Товар приобретен на продажу" },
            ]}
          />
        ) : (
          <SelectFormField
            form={form}
            name="type"
            label="Вид объявления"
            placeholder="Выберите вид объявления"
            options={[
              { value: "personal", label: "Продаю свое" },
              { value: "resale", label: "Товар приобретен на продажу" },
            ]}
          />
        )}
      </div>
    </div>
  );
};
