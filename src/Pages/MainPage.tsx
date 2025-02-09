import { CreateAdvertForm } from "@modules/CreateAdvertForm/CreateAdvertForm";

const MainPage = () => {
  return (
    <div className="mx-auto w-full max-w-[1200px] bg-main-bg px-4 py-8 text-main-black sm:px-6">
      <span className="text-main-gray relative left-0 hidden text-[0.7rem] xl:inline">
        Главная — Шины, диски и колёса{" "}
      </span>
      <h1 className="mt-3 flex justify-center gap-4 text-2xl font-semibold sm:text-[2.0rem] sm:tracking-normal xl:justify-start">
        <button className="hidden cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 xl:inline-flex">
          <img src="./assets/svgs/arrow_left.svg" alt="arrow left" />
        </button>
        Добавить объявление
      </h1>
      <CreateAdvertForm />
    </div>
  );
};

export default MainPage;
