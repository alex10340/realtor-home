const Card = ({ image, price, location }) => {
  return (
    <div className="m-[10px] shadow-xl card card-compact">
      <figure className="overflow-hidden aspect-[2/1.25] cursor-pointer">
        <img
          className="transition duration-500 scale-110 hover:scale-100 hover:opacity-80"
          src={`src/assets/houses/` + image}
          alt="House picture"
        />
      </figure>

      <div className="card-body">
        <div className="">
          <p className="card-title">{price}</p>
          <p className="mb-2 opacity-90">{location}</p>
        </div>
        <button className="text-white btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};
export default Card;

Card;
