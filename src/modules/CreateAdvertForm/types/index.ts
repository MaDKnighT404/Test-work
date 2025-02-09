import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(1, "Название не должно быть пустым")
    .refine(
      (value) => {
        const onlyNumbers = /^\d+$/;
        const hasLetters = /[a-zA-Zа-яА-Я]/.test(value);
        const isArticleLike = /^\d+[-_.]\d+/.test(value);

        return hasLetters && !onlyNumbers.test(value) && !isArticleLike;
      },
      {
        message: "Название должно содержать буквы и не может состоять только из цифр или артикула",
      },
    ),
  condition: z.enum(["new", "used"], {
    required_error: "Выберите состояние товара",
  }),

  type: z.enum(["personal", "resale"], {
    required_error: "Выберите тип объявления",
  }),
  description: z.string().min(1, "Описание не должно быть пустым"),
  price: z.string().regex(/^(0|[1-9]\d*)(\.\d+)?$/, "Цена должна быть валидным числом"),
  videoLink: z
    .string()
    .url("Ссылка должна быть валидной. Пример: https://example.com")
    .or(z.literal("")),

  photos: z
    .array(z.instanceof(File))
    .min(1, "Как минимум одно фото обязательно")
    .max(10, "Максимум 10 фотографий")
    .refine(
      (files) =>
        files.every((file) => {
          const pattern = /\.(jpg|jpeg|png|webp)$/i;
          return pattern.test(file.name);
        }),
      {
        message: "Можно загружать только картинки с расширениями .jpg, .jpeg, .png, .webp",
      },
    ),
  city: z.enum(["moscow", "spb", "ekaterinburg", "kazan", "krasnodar"], {
    required_error: "Выберите город",
  }),
  phone: z
    .string()
    .transform((val) => val.replace(/[^\d]/g, ""))
    .refine((val) => val.length === 11, "Введите корректный номер телефона"),

  contactMethod: z.enum(["calls&messages", "messages", "calls"], {
    required_error: "Выберите способ связи",
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export type Photo = File;
