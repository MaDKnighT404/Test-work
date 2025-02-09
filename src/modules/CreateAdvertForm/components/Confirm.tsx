import { Button } from "@shared/components/ui/button";

export const Confirm = () => {
  return (
    <div className="mt-2 xs:mt-4 lg:mt-6">
      <div className="flex flex-col gap-[15px] xs:gap-3 md:flex-row">
        <Button
          type="submit"
          className="bg-main-green px-11 py-6 text-base font-semibold text-white"
        >
          Разместить
        </Button>
        <Button
          variant="outline"
          className="border-main-gray w-fit px-6 py-6 text-sm font-semibold xs:py-[22px]"
        >
          Сохранить и выйти
        </Button>
      </div>
      <p className="text-additional-gray mt-4 text-[13px] leading-[18px] xs:mt-6 xs:pr-6">
        Вы публикуете объявление и данные в нём, чтобы их мог посмотреть кто угодно в интернете.{" "}
        <br className="hidden md:block" />
        Вы также соглашаетесь с{" "}
        <a href="#" className="underline underline-offset-[2px]">
          правилами.
        </a>
      </p>
    </div>
  );
};
