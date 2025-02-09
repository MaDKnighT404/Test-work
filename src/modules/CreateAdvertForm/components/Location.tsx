import { UseFormReturn } from "react-hook-form";

import { SelectFormField } from "../ui/SelectFormField";

import { FormValues } from "../types";

export const Location = ({ form }: { form: UseFormReturn<FormValues> }) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-3 lg:mt-2">
      <h2 className="text-lg font-semibold sm:text-2xl">Местоположение</h2>
      <div className="mt-3 flex flex-col gap-4 sm:gap-5">
        <SelectFormField
          form={form}
          name="city"
          label="Город"
          placeholder="Выберите город"
          options={[
            { value: "moscow", label: "Москва" },
            { value: "spb", label: "Санкт-Петербург" },
            { value: "ekaterinburg", label: "Екатеринбург" },
            { value: "kazan", label: "Казань" },
            { value: "krasnodar", label: "Краснодар" },
          ]}
        />
      </div>
    </div>
  );
};
