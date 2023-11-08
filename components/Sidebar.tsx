import { getData } from "@/actions/getData";

const Sidebar = async () => {
  const data = await getData();

  return (
    <div className="h-full overflow-y-scroll gap-2 text-md">
      {Object.keys(data.message).map((breed) => (
        <p key={breed}>{breed}</p>
      ))}
    </div>
  );
};

export default Sidebar;
