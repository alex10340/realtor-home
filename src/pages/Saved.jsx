import { useFavorites } from "../context/FavoritesContext";
import { houses } from "../data/allData";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import Card from "../components/Card";

const Saved = () => {
  const { favoriteIds } = useFavorites();
  const favoriteHouses = houses.filter((house) =>
    favoriteIds.includes(house.id)
  );

  return (
    <div className="px-8 mx-auto max-w-[1350px]">
      <div className="flex gap-4 items-center my-12">
        <h1 className="flex-1 text-3xl font-bold lg:text-4xl">
          Saved Listings
        </h1>
        <Link to="/" className="shadow btn" onClick={scrollToTop}>
          Return
        </Link>
      </div>

      {favoriteHouses.length > 0 ? (
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[-10px]">
          {favoriteHouses.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </div>
      ) : (
        <p className="mb-48 text-xl font-medium text-left">
          No houses saved yet
          <span className="text-base font-normal opacity-85">
            <br />
            Tap on the heart icon to save a listing.
          </span>
        </p>
      )}
    </div>
  );
};
export default Saved;
