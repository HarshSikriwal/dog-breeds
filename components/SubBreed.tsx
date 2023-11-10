import { getData } from "@/actions/getData";
import React from "react";

const SubBreed = async ({ breed }: { breed: string }) => {
  const breeds: { [key: string]: string[] | [] } = await getData();
  const subBreed = breeds[breed];

  return (
    <div className="basis-1/5">
      <h2 className="text-2xl font-bold mb-6">Sub Breeds:</h2>

      {subBreed.length === 0 ? (
        <p>No Sub-Breeds</p>
      ) : (
        <div className="flex flex-col w-full gap-4 ">
          {subBreed.map((child) => (
            <div
              key={child}
              className="bg-[#fff2e0] rounded-md text-center text-2xl py-2 font-bold shadow-md"
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubBreed;
