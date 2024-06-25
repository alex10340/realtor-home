const Card = ({ image, price, location }) => {
  return (
    <>
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

      {/* ---------------------------------------------------------------------------------- */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Card;

Card;
