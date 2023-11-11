import SubBreed from "@/components/SubBreed";
import React from "react";

function BreedLayout({
  children,
  params,
  searchParams,
}: {
  children: React.ReactNode;
  params: { breed?: string };
  searchParams: { subbreed: string };
}) {
  return (
    <div className="grow flex  m-4">
      <SubBreed breed={params.breed!} searchParams={searchParams} />
      {children}
    </div>
  );
}

export default BreedLayout;
