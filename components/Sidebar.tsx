import { getData } from "@/actions/getData";

import Link from "next/link";
import SidebarItem from "./SidebarItem";

export const revalidate = 0;

const Sidebar = async () => {
  const data = await getData();
  const breedsArray = Object.keys(data);

  return (
    <div className="basis-1/5">
      <div className="flex flex-col text-lg h-full  text-black overflow-auto">
        {breedsArray.map((breed) => (
          <Link href={breed} key={breed} className="mx-1 mt-1">
            <SidebarItem breed={breed} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
