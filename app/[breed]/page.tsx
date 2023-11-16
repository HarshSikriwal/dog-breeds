import { getBreedRandomImages } from "../getBreedDetails";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { RefreshCcw } from "lucide-react";

export default async function BreedPage({
  params,
  searchParams,
}: {
  params: { breed?: string };
  searchParams?: { subbreed: string };
}) {
  const breedImage = await getBreedRandomImages(
    params.breed,
    searchParams?.subbreed
  );

  const handleRandomImage = async () => {
    "use server";
    revalidatePath(`/${params.breed}`, "page");
  };

  function captionForImage(caption: string) {
    let captionData = "";
    switch (caption) {
      case "subbreed":
        captionData = `This dog is from ${searchParams?.subbreed} - ${params.breed} breed.`;
        break;
      case "breed":
        captionData = `This dog is from ${params.breed} breed.`;
        break;
      case "breed" && searchParams?.subbreed:
        captionData = `Cannot find ${searchParams?.subbreed} - ${params.breed} image. This dog is from ${params.breed} breed.`;
        break;
      case "randomDog":
        captionData = `Cannot find ${params.breed} dog image. Just a Random Dog then.`;
        break;
    }

    return captionData;
  }

  return (
    <>
      {breedImage ? (
        <div className="h-full w-full flex flex-col">
          <div className="flex grow justify-center gap-8 p-14 relative ">
            <div className="relative flex h-full w-full">
              <Image
                className="shadow-2xl"
                src={breedImage[0]}
                alt="Please Reload"
                loading="lazy"
                objectFit="contain"
                fill
                style={{ borderRadius: "2%" }}
              />
            </div>
            <form className="" action={handleRandomImage}>
              <button
                type="submit"
                className=" bg-[#90887f] rounded p-2 shadow-2xl"
              >
                <RefreshCcw />
              </button>
            </form>
          </div>
          <p className="z-[2000] text-center w-full italic">
            {captionForImage(breedImage[1])}
          </p>
        </div>
      ) : (
        <p>Error In Data Fetching</p>
      )}
    </>
  );
}
