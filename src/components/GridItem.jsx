import { useNavigate } from "react-router-dom";

const GridItem = ({ img, location }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/showroom?q=${encodeURIComponent(location)}`);
  };

  return (
    <div className="m-2 lg:m-[10px] card card-compact group max-h-[150px]">
      <figure className="shadow-xl relative overflow-hidden rounded-2xl aspect-[3/1] cursor-pointer bg-black">
        <img
          className="opacity-70 transition duration-500 scale-110 group-hover:scale-100 group-hover:opacity-60"
          src={img}
          alt="Location Image"
        />
        <div className="flex items-center justify-between absolute w-[100%] px-8">
          <h3 className="pr-4 text-xl font-medium text-white drop-shadow-md">
            {location}
          </h3>
          <span
            className="text-sm font-medium drop-shadow-md btn"
            onClick={handleSeeMore}
          >
            See more
          </span>
        </div>
      </figure>
    </div>
  );
};

export default GridItem;
