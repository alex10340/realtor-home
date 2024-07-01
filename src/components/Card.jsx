import Logo from "../assets/logo.png";
import classNames from "classnames";

const Card = ({
  id,
  img,
  category = "none",
  price = "--- --- €",
  location = "Location",
  listingType = "listingType",
  bedrooms = "-",
  bathrooms = "-",
}) => {
  const categoryClass = classNames(
    "p-2 text-sm font-bold text-white rounded-full shadow",
    {
      "bg-accent": category === "New",
      "bg-yellow-500": category === "Collection",
    }
  );

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

      {/* ---------------------------------------------------------------------------------- */}

      <dialog id={`property-modal-${id}`} className="modal">
        <div className="flex flex-col p-0 w-full h-full max-h-full min-[512px]:h-[90%] rounded-none min-[512px]:rounded-xl modal-box">
          <div className="flex justify-between items-center m-2">
            <div className="pl-2 text-xl btn btn-ghost">
              <div>
                <img src={Logo} alt="logo" className="w-10" />
              </div>
              <div className="">AcmeHome</div>
            </div>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
          <div className="flex items-center p-6 pt-4">
            <h3 className="flex-1 pr-1 text-xl font-bold drop-shado">
              {listingType} in{" "}
              <span className="underline decoration-primary">{location}</span>
            </h3>
            <span className={categoryClass}>{category}</span>
          </div>

          <div
            className="h-[250px] hero flex-shrink-0"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>

          <div className="gap-0 p-0 card-body">
            <div className="flex items-center p-6">
              <p className="text-xl font-bold">{price}</p>
              <p className="text-right opacity-90 text-[15px]">{location}</p>
            </div>

            <div className="flex px-6 py-2 font-medium bg-neutral-content text-neutral">
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

            <p className="flex-1 p-6 shadow-inner opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              minus obcaecati magnam sapiente nobis fugit sit, est aut culpa
              laborum neque minima quisquam, ullam molestias distinctio enim?
              Labore, suscipit minus consequatur quibusdam aut qui ea? Adipisci
              hic fugit beatae in mollitia aliquid esse ducimus at! Fuga officia
              alias facere corrupti ullam, aperiam reiciendis, architecto modi
              voluptatibus maiores repellendus id, mollitia atque. Quia
              molestias laborum amet nulla voluptates modi accusamus
              perferendis, quam distinctio ea culpa necessitatibus unde ex
              earum! Voluptatum, suscipit!
            </p>
            <div className="sticky w-full h-16 bottom-0 bg-base-100 flex z-[1000] shadow-[0_12px_24px_0_rgba(0,0,0,0.5)]">
              <div className="flex m-2 space-x-2 w-full">
                <label className="swap swap-flip">
                  <input type="checkbox" />
                  <div className="swap-on">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#fc453f"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-1 w-12 h-12 btn"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#fc453f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="swap-off">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-1 w-12 h-12 btn"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#363f4b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </label>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-1 w-12 h-12 btn"
                >
                  <path
                    d="M8.68439 10.6578L15.3124 7.34378M15.3156 16.6578L8.69379 13.3469M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                    stroke="#363f4b"
                    strokeWidth="1.5"
                  />
                </svg>
                <button className="flex-1 text-white btn btn-primary">
                  <p className="px-8">Contact Agent</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Card;
