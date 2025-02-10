import { Photo } from "../types";

export const PhotoCollection = ({
  photos,
  onPhotoRemove,
}: {
  photos: Photo[];
  onPhotoRemove: (index: number) => void;
}) => {
  return (
    <>
      {photos?.map((photo, index) => (
        <div key={index} className="relative flex gap-4 rounded-lg bg-main-bg">
          <img
            src={URL.createObjectURL(photo)}
            alt={`Фото ${index + 1}`}
            className="h-[90px] w-[120px] rounded-lg object-cover"
          />
          <button
            type="button"
            className="absolute right-1 top-1 rounded-full bg-white p-1"
            onClick={() => onPhotoRemove(index)}
          >
            <img src="./assets/svgs/x.svg" alt="Удалить" />
          </button>
        </div>
      ))}
    </>
  );
};
