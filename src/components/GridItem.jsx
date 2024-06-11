const GridItem = ({ image, location }) => {
  return (
    <div className="m-2 lg:m-[10px] shadow-xl card card-compact group">
      <figure className="relative overflow-hidden rounded-2xl aspect-[3/1] cursor-pointer bg-black">
        <img
          className="opacity-80 transition duration-500 scale-110 group-hover:scale-100 group-hover:opacity-70"
          src={`src/assets/locations/` + image}
          alt="Location Image"
        />

        <div className="absolute w-[100%] px-8">
          <h3 className="text-xl font-medium text-white drop-shadow">
            {location}
          </h3>
        </div>
      </figure>
    </div>
  );
};

export default GridItem;
