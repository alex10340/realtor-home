import { Link } from "react-router-dom";
import { houses } from "../data/allData";
import Card from "../components/Card";

const Showroom = () => {
  return (
    <div className="px-8 mx-auto max-w-[1350px] mb-10">
      <div className="flex gap-4 items-center my-12">
        <h1 className="flex-1 text-3xl font-bold lg:text-4xl">Showroom</h1>
        <Link to="/" className="shadow btn">
          Return
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[-10px]">
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};
export default Showroom;
