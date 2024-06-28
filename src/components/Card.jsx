const Card = ({
  id,
  img,
  price = "--- --- €",
  location = "Location",
  listingType = "listingType",
  bedrooms = "-",
  bathrooms = "-",
}) => {
  return (
    <>
      <div
        className="m-[10px] shadow-xl card card-compact cursor-pointer group"
        onClick={() =>
          document.getElementById(`property-modal-${id}`).showModal()
        }
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-70"
              >
                <path
                  d="M3 5V19M3 16H21M21 19V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H11V15.7273M7 12H7.01M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>{bathrooms}</div>
              <svg
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-70"
              >
                <path d="M8.487 2.04A3 3 0 0 1 11 5v2H5V5c0-1.039.528-1.955 1.33-2.493A2 2 0 0 0 3 4v6h16a1 1 0 0 1 0 2v1a6.002 6.002 0 0 1-4 5.659V19a1 1 0 0 1-2 0H7a1 1 0 0 1-2 0v-.341A6.002 6.002 0 0 1 1 13v-1a1 1 0 0 1 0-2V4a4 4 0 0 1 7.487-1.96zM17 12H3v1a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-1zM8 4a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <button
            className="text-white btn btn-primary"
            onClick={() =>
              document.getElementById(`property-modal-${id}`).showModal()
            }
          >
            Buy Now
          </button> */}

      {/* ---------------------------------------------------------------------------------- */}

      <dialog id={`property-modal-${id}`} className="modal">
        <div className="p-0 h-full modal-box">
          <div className="flex items-center p-6">
            <h3 className="flex-1 text-lg font-bold">Hello!</h3>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
          <div
            className="h-[300px] hero"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="p-6">
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Card;
