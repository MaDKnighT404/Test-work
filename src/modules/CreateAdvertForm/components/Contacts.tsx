import { UseFormReturn } from "react-hook-form";

import { TelFormField } from "../ui/TelFormField";
import { SelectFormField } from "../ui/SelectFormField";

import { FormValues } from "../types";

export const Contacts = ({ form }: { form: UseFormReturn<FormValues> }) => {
  return (
    <div className="flex flex-col gap-4 xs:gap-0 lg:mt-2">
      <h2 className="text-lg font-semibold sm:text-2xl">Контакты</h2>
      <div className="flex flex-col gap-4 xs:mt-6 sm:gap-5">
        <TelFormField
          form={form}
          name="phone"
          label="Телефон"
          description={
            <div className="flex flex-col gap-2">
              <p className="leading-4.5">
                Чтобы ваши номера не попали в базы мошенников, мы показываем вместо них подменные, а
                звонки переводим вам. Эту защиту нельзя отключить.
              </p>
              <a href="#" className="underline underline-offset-[2px]">
                Подробнее
              </a>
            </div>
          }
        />

        <SelectFormField
          form={form}
          name="contactMethod"
          label="Способ связи"
          options={[
            { value: "calls&messages", label: "Звонки и сообщения" },
            { value: "calls", label: "Звонки" },
            { value: "messages", label: "Сообщения" },
          ]}
        />
      </div>
    </div>
  );
};
