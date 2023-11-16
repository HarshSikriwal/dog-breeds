"use client";
import { useSearchParams } from "next/navigation";

const SubBreedItem = ({ child }: { child: string }) => {
  const query = useSearchParams().get("subbreed");

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
