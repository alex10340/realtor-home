import { useFavorites } from "../context/FavoritesContext";
import { houses } from "../data/allData";
import Card from "../components/Card";

const Saved = () => {
  const { favoriteIds } = useFavorites();
  const favoriteHouses = houses.filter((house) =>
    favoriteIds.includes(house.id)
  );

  return (
    <div className="px-[12px] mx-auto max-w-[1350px]">
      <h1 className="m-10 text-4xl font-bold">Saved Properties</h1>
      {favoriteHouses.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {favoriteHouses.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </div>
      ) : (
        <p>No houses saved yet.</p>
      )}
    </div>
  );
};
export default Saved;
