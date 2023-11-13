import { getBreedRandomImages } from "../getBreedDetails";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { RefreshCcw } from "lucide-react";
import { Suspense } from "react";
import Loading from "@/Loading";

export const revalidate = 0;

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
  //   console.log(params.breed, searchParams?.subbreed);
  console.log(searchParams?.subbreed);
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
    <div className="flex h-full w-full justify-center gap-8 p-14 relative">
      <div className="flex h-full w-full">
        {breedImage && (
          <div className="relative h-full w-full flex justify-center">
            <Image
              src={breedImage[0]}
              alt="Please Reload"
              loading="lazy"
              objectFit="contain"
              fill
            />
            <caption className="z-20 self-end absolute -bottom-10">
              {captionForImage(breedImage[1])}
            </caption>
          </div>
        )}
      </div>
      <form className="" action={handleRandomImage}>
        <button type="submit" className=" bg-[#90887f] rounded p-2">
          <RefreshCcw />
        </button>
      </form>
    </div>
  );
}
