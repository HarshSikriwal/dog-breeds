import { getData } from "@/actions/getData";

const Sidebar = async () => {
  const data = await getData();
  const breedsArray = Object.keys(data.message);

  return (
    <div className="h-full overflow-y-scroll flex flex-col text-lg basis-2/12  bg-[#d7d4ca] text-black">
      {/* <SearchBar /> */}
      {breedsArray.map((breed) => (
        <div
          key={breed}
          className="p-4 border-b-2 border-t-2 border-t-[#fffbee] border-b-[#b2afa6]"
        >
          <p>{breed}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
