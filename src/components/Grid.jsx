import GridItem from "./GridItem";
import { locations } from "../data/allData";

const Grid = () => {
  return (
    <div className="py-6 pb-12 px-[12px] mx-auto max-w-[1350px]">
      <h3 className="p-2 pt-0 pb-4 text-2xl font-normal">Most popular areas</h3>
      <div className="grid grid-cols sm:grid-cols-2 min-[1200px]:grid-cols-3">
        {locations.map((location) => (
          <GridItem
            key={location.id}
            img={location.img}
            location={location.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Grid;
