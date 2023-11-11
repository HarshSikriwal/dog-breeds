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

  const handleRandomImage = async () => {
    "use server";
    revalidatePath(`/${params.breed}`, "page");
  };

  return (
    <div className="flex h-full w-full justify-center gap-8 p-14 relative">
      <div className="flex h-full w-full relative">
        <Image
          className=""
          src={breedImage}
          alt="Dog Image"
          loading="lazy"
          objectFit="contain"
          fill
        />
      </div>
      <form className="" action={handleRandomImage}>
        <button type="submit" className=" bg-[#90887f] rounded p-2">
          <RefreshCcw />
        </button>
      </form>
    </div>
  );
}
