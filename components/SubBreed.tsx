import { getData } from "@/actions/getData";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

const SubBreed = async ({
  breed,
  searchParams,
}: {
  breed: string;
  searchParams?: { subbreed: string };
}) => {
  const breeds: { [key: string]: string[] | [] } = await getData();
  const subBreed = breeds[breed];

  const handleLink = async () => {
    "use server";
    revalidatePath(`/${breed}`, "page");
  };

  return (
    <div className="basis-1/5">
      <h2 className="text-2xl font-bold mb-6">Sub Breeds:</h2>

      {subBreed.length === 0 ? (
        <p className="text-2xl">No Sub-Breeds</p>
      ) : (
        <div className="flex flex-col w-full gap-4 ">
          {subBreed.map((child) => (
            <form
              key={child}
              action={handleLink}
              className="bg-[#fff2e0] rounded-md text-center text-2xl py-2 font-bold shadow-md"
            >
              <Link href={`?subbreed=${child}`}>{child}</Link>
            </form>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubBreed;
