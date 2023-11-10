import React from "react";
import { getBreedRandomImages } from "../getBreedDetails";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export default async function BreedPage({
  params,
}: {
  params: { breed?: string };
}) {
  const breedImage = await getBreedRandomImages(params.breed);
  console.log(breedImage);

  const handleRandomImage = async () => {
    "use server";
    revalidatePath(`/${params.breed}`, "page");
  };

  return (
    <div>
      <Image
        src={breedImage.message}
        alt="Dog Image"
        height={400}
        width={400}
      />
      <form action={handleRandomImage}>
        <button type="submit">Random Breed Image</button>
      </form>
    </div>
  );
}
