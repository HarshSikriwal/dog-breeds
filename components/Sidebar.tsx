import { getData } from "@/actions/getData";

import Link from "next/link";

export const revalidate = 0;

const Sidebar = async () => {
  const data = await getData();
  const breedsArray = Object.keys(data);

  return (
    <div className="basis-1/5">
      <div className="flex flex-col text-lg h-full bg-[#d7d4ca] text-black overflow-auto">
        {breedsArray.map((breed) => (
          <Link
            href={breed}
            key={breed}
            className={`p-4 border-b-2 border-t-2 border-t-[#fffbee] border-b-[#b2afa6]`}
          >
            {breed}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
