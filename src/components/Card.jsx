const Card = ({ image, price }) => {
  return (
    <div className="w-96 m-[10px] shadow-xl card card-compact">
      <figure>
        <img src={`src/assets/houses/` + image} alt="House picture" />
      </figure>

      <div className="card-body">
        <p className="card-title">{price}</p>
        <button className="btn btn-primary">Buy Now</button>
        <div className="justify-end card-actions"></div>
      </div>
    </div>
  );
};
export default Card;
