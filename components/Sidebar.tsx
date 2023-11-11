import { getData } from "@/actions/getData";
import SearchBar from "./SearchBar";
import Link from "next/link";

interface SearchProps {
  params?: { breed: string };
}

export const revalidate = 0;

const Sidebar = async ({ breed }: { breed: string }) => {
  const data = await getData();
  const breedsArray = Object.keys(data);
  console.log(breed);

  return (
    <div className="basis-1/5">
      {/* <SearchBar /> */}
      <div className="flex flex-col text-lg h-full bg-[#d7d4ca] text-black overflow-auto">
        {breedsArray.map((breed) => (
          <Link
            href={breed}
            key={breed}
            className={`p-4 border-b-2 border-t-2 border-t-[#fffbee] border-b-[#b2afa6]`}
          >
            <p>{breed}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
