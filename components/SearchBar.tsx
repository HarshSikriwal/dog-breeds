"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const router = useRouter();

  const [value, setValue] = useState("");

  useEffect(() => {
    router.push(`/?breeds=${value}`);
  }, [value, router]);

  return (
    <div className="">
      <form>
        <input
          placeholder="search for any dog breeds..."
          name="breeds"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
