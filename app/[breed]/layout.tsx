import SubBreed from "@/components/SubBreed";
import React from "react";

function BreedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { breed?: string };
}) {
  return (
    <div className="grow flex  m-4">
      <SubBreed breed={params.breed!} />
      {children}
    </div>
  );
}

export default BreedLayout;
