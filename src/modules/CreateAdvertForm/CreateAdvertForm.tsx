import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Parameters } from "./components/Parameters";
import { Details } from "./components/Details";
import { Location } from "./components/Location";
import { Contacts } from "./components/Contacts";
import { Confirm } from "./components/Confirm";

import { Form } from "@shared/components/ui/form";
import { useToast } from "@shared/hooks/use-toast";

import { FormValues, formSchema } from "./types";

export function CreateAdvertForm() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      condition: "new",
      type: undefined,
      description: "",
      price: "",
      photos: [],
      videoLink: "",
      city: undefined,
      phone: "",
      contactMethod: "calls&messages",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Form submitted:", values);
    toast({
      variant: "success",
      title: "Успех!",
      description:
        "Объявление успешно создано и отправлено на модерацию. (Данные можно посмотреть в консоле)",
    });
  }

  function onError() {
    toast({
      variant: "destructive",
      title: "Ошибка валидации формы",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="mt-6 flex w-full flex-col gap-8 rounded-lg bg-form-bg p-6 sm:mt-9 sm:p-8 lg:gap-6"
      >
        <Parameters form={form} />
        <Details form={form} />
        <Location form={form} />
        <Contacts form={form} />
        <Confirm />
      </form>
    </Form>
  );
}
