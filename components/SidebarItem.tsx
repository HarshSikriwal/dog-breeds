"use client";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({ breed }: { breed: string }) => {
  const pathname = usePathname();
  const active = breed === pathname.slice(1);

  return (
    <div
      className={`p-4  drop-shadow-2xl  border-b-2 border-t-2 border-b-[#b2afa6] bg-[#d7d4ca] ${
        active && "drop-shadow-none shadow-none bg-[#b2afa6] border-none"
      }`}
    >
      {breed}
    </div>
  );
};

export default SidebarItem;
