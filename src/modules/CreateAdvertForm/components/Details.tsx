import { UseFormReturn } from "react-hook-form";

import { TextAreaFormField } from "../ui/TextAreaFormField";
import { TextFormField } from "../ui/TextFormField";
import { FileUploadFormField } from "../ui/FileUploadFormField";

import { FormValues } from "../types";

export const Details = ({ form }: { form: UseFormReturn<FormValues> }) => {
  return (
    <div className="flex flex-col gap-4 xs:gap-7">
      <h2 className="text-lg font-semibold sm:text-2xl">Подробности</h2>

      <div className="flex flex-col gap-5 xs:gap-6">
        <TextAreaFormField
          form={form}
          name="description"
          label="Описание объявления"
          placeholder="Телефон"
          description="Не указывайте в описании телефон и e-mail — для этого есть отдельные поля"
          descriptionClassName=""
        />

        <TextFormField form={form} name="price" type="number" label="Цена" placeholder="₽" />

        <FileUploadFormField
          form={form}
          name="photos"
          label="Фотографии"
          description={form.watch("photos") ? `${form.watch("photos").length} из 10` : "0 из 10"}
        />

        <TextFormField
          form={form}
          name="videoLink"
          label="Видео"
          placeholder="Ссылка на видео"
          notRequired
        />
      </div>
    </div>
  );
};
