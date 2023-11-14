"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const SubBreedItem = ({ child }: { child: string }) => {
  const query = useSearchParams().get("subbreed");
  console.log(child, query);

  return (
    <div
      className={` py-2 rounded-md bg-[#fff2e0] ${
        child === query
          ? "shadow-none bg-[#fff2e0]/20 rounded-none"
          : "shadow-2xl"
      }`}
    >
      {child}
    </div>
  );
};

export default SubBreedItem;
