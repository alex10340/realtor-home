import { useRef } from "react";
import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevArrow from "./carousel arrows/PrevArrow";
import NextArrow from "./carousel arrows/NextArrow";

import logo from "../assets/logo.png";

const Card = ({ house, toggleModal }) => {
  const {
    id,
    img,
    category = "none",
    price = "--- --- €",
    location = "Location",
    listingType = "listingType",
    bedrooms = "-",
    bathrooms = "-",
    interiors = [],
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti tempore, voluptatem id, eaque fuga dolorum voluptatibus, laudantium nihil praesentium obcaecati facilis amet dicta nulla velit suscipit dolorem optio possimus voluptates! Sapiente nesciunt, facere odio, incidunt ipsa totam quaerat porro sed laborum nam obcaecati numquam at alias atque? Alias, illo?",
  } = house;

  const categoryClass = classNames(
    "p-2 text-sm font-bold text-white rounded-full shadow",
    {
      "bg-green-500": category === "New",
      "bg-yellow-500": category === "Collection",
    }
  );

  const openModal = () => {
    toggleModal();
    console.log({ id });
    document.getElementById(`property-modal-${id}`).showModal();
  };

  const carouselRef = useRef(null);

  const sliderReset = () => {
    toggleModal();
    if (carouselRef.current) carouselRef.current.slickGoTo(0);
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: true,
    swipeToSlide: true,
    arrows: false,
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

      {/* Modal */}

      <dialog id={`property-modal-${id}`} className="transition-none modal">
        <div className="flex flex-col p-0 h-full max-h-full min-[512px]:h-[95%] rounded-none min-[512px]:rounded-xl modal-box overflow-x-hidden w-[100vw] ">
          <div className="flex justify-between items-center m-2">
            <div className="pl-2 text-xl cursor-default hover:bg-white btn btn-ghost no-animation">
              <div>
                <img src={logo} alt="logo" className="w-10" />
              </div>
              <div className="">AcmeHome</div>
            </div>
            <form method="dialog">
              <button className="btn" onClick={sliderReset}>
                Close
              </button>
            </form>
          </div>
          <div className="flex items-center p-6 pt-4">
            <h3 className="flex-1 pr-1 text-xl font-bold">
              {listingType} in{" "}
              <span className="underline decoration-primary">{location}</span>
            </h3>
            <span className={categoryClass}>{category}</span>
          </div>

          {interiors.length > 0 && (
            <div className={`overflow-hidden relative flex-shrink-0`}>
              <Slider
                ref={carouselRef}
                {...settings}
                className="mb-[-20px] mx-[-10px] sm:w-[532px]"
              >
                <img
                  src={img}
                  alt="House image"
                  className="h-[300px] object-cover"
                />
                {interiors.map((interior, index) => (
                  <img
                    key={index}
                    src={interior}
                    className="h-[300px] object-cover"
                    alt={`Interior ${index + 1}`}
                  />
                ))}
              </Slider>
              <div className="absolute left-4 top-[150px] z-10 drop-shadow">
                <PrevArrow
                  onClick={() => carouselRef.current.slickPrev()}
                  btnType="btn-circle"
                  color="text-neutral"
                  className="drop-shadow"
                />
              </div>
              <div className="absolute right-4 top-[150px] z-10 drop-shadow">
                <NextArrow
                  onClick={() => carouselRef.current.slickNext()}
                  btnType="btn-circle"
                  color="text-neutral"
                  className="drop-shadow"
                />
              </div>
            </div>
          )}

          {interiors.length == 0 && (
            <img
              src={img}
              alt="House image"
              className="h-[300px] object-cover"
            />
          )}

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

            <p className="p-6 pb-0 font-bold underline underline-offset-4 text-neutral">
              Description
            </p>
            <p className="flex-1 p-6 opacity-90">{desc}</p>

            <div className="sticky w-full h-16 bottom-0 bg-base-100 flex z-[1000] shadow-[0_12px_24px_0_rgba(0,0,0,0.5)]">
              <div className="flex m-2 space-x-2 w-full">
                <label className="swap">
                  <input type="checkbox" />
                  <div className="transition-none swap-on">
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
                  <div className="transition-none swap-off">
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
