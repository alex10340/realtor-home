import PropertyModal from "./PropertyModal";
import { useFavorites } from "../context/FavoritesContext";

const Card = ({ house, toggleModal = () => {} }) => {
  const {
    id,
    img,
    price = "--- --- €",
    location = "Location",
    listingType = "listingType",
    bedrooms = "-",
    bathrooms = "-",
  } = house;

  const { favoriteIds, addFavorite, removeFavorite } = useFavorites();
  const isFavorited = favoriteIds.includes(id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(id) : addFavorite(id);
    console.log(isFavorited);
  };

  const openModal = () => {
    toggleModal();
    console.log({ id });
    document.getElementById(`property-modal-${id}`).showModal();
  };

  return (
    <>
      <div
        className="m-[10px] shadow-xl card card-compact cursor-pointer group"
        onClick={openModal}
      >
        <figure className="overflow-hidden aspect-[2/1.25]">
          <img
            className="transition duration-500 scale-110 group-hover:scale-100 group-hover:opacity-80"
            src={img}
            alt="House picture"
          />
        </figure>

        <div className="card-body">
          <div className="flex items-center mb-2">
            <p className="text-xl font-bold">{price}</p>
            <p className="text-right opacity-90 text-[15px]">{location}</p>
          </div>
          <div className="flex px-4 py-2 mx-[-16px] mb-[-16px] rounded-b-2xl bg-neutral-content text-neutral font-medium">
            <p>{listingType}</p>
            <div className="flex flex-1 justify-end items-center space-x-1">
              <div>{bedrooms}</div>
              {/* SVG Icon Placeholder */}
              <div>{bathrooms}</div>
              {/* SVG Icon Placeholder */}
            </div>
          </div>
        </div>
      </div>

      <PropertyModal
        house={house}
        toggleModal={toggleModal}
        isFavorited={isFavorited}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default Card;
