import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/logo.png";
import classNames from "classnames";

import { NextArrow, PrevArrow } from "./carousel arrows/CarouselArrows";
import { FavoriteOn, FavoriteOff } from "./favorite icons/FavoriteIcons";
import { useFavorites } from "../context/FavoritesContext";
import { LuShare2, LuBed, LuBath } from "react-icons/lu";

const PropertyModal = ({ house, toggleModal }) => {
  const {
    id,
    img,
    category,
    price,
    location,
    listingType,
    bedrooms,
    bathrooms,
    interiors = [],
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti tempore, voluptatem id, eaque fuga dolorum voluptatibus, laudantium nihil praesentium obcaecati facilis amet dicta nulla velit suscipit dolorem optio possimus voluptates! Sapiente nesciunt, facere odio, incidunt ipsa totam quaerat porro sed laborum nam obcaecati numquam at alias atque? Alias, illo?",
  } = house;

  const { favoriteIds, addFavorite, removeFavorite } = useFavorites();
  const isFavorited = favoriteIds.includes(id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(id) : addFavorite(id);
    console.log(!isFavorited);
  };

  const categoryClass = classNames(
    "p-2 text-sm font-bold text-white rounded-full shadow",
    {
      "bg-green-500": category === "New",
      "bg-yellow-500": category === "Collection",
    }
  );

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
    <dialog id={`property-modal-${id}`} className="transition-none modal">
      <div className="flex flex-col p-0 h-full max-h-full min-[512px]:h-[95%] rounded-none min-[512px]:rounded-xl modal-box overflow-x-hidden w-[100vw] ">
        <div className="flex justify-between items-center m-2">
          <div className="pl-2 text-xl cursor-default hover:bg-white btn btn-ghost no-animation">
            <div>
              <img src={logo} alt="logo" className="w-10" />
            </div>
            <div>AcmeHome</div>
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

        {interiors.length > 0 ? (
          <div className="overflow-hidden relative flex-shrink-0">
            <Slider
              ref={carouselRef}
              {...settings}
              className="mb-[-20px] mx-[-10px] sm:w-[532px]"
            >
              <img
                src={img}
                alt="House image"
                className="h-[340px] object-cover"
                loading="lazy"
              />
              {interiors.map((interior, index) => (
                <img
                  key={index}
                  src={interior}
                  className="h-[340px] object-cover"
                  alt={`Interior ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </Slider>

            <div className="absolute left-4 top-[146px] z-10 drop-shadow">
              <PrevArrow
                onClick={() => carouselRef.current.slickPrev()}
                btnType="btn-circle"
                color="text-neutral"
                className="drop-shadow"
              />
            </div>
            <div className="absolute right-4 top-[146px] z-10 drop-shadow">
              <NextArrow
                onClick={() => carouselRef.current.slickNext()}
                btnType="btn-circle"
                color="text-neutral"
                className="drop-shadow"
              />
            </div>
          </div>
        ) : (
          <img
            src={img}
            alt="House image"
            className="h-[340px] object-cover"
            loading="lazy"
          />
        )}

        <div className="flex overflow-hidden flex-col flex-1 gap-0 p-0 card-body">
          <div className="flex items-center p-6">
            <p className="text-xl font-bold">{price}</p>
            <p className="text-right opacity-90 text-[15px]">{location}</p>
          </div>

          <div className="flex px-6 py-2 font-medium bg-neutral-content text-neutral">
            <p>{listingType}</p>
            <div className="flex flex-1 justify-end items-center space-x-1">
              <div>{bedrooms}</div>
              <LuBed />
              <div>{bathrooms}</div>
              <LuBath />
            </div>
          </div>

          <div className="overflow-auto flex-1">
            <p className="p-6 pb-0 font-bold underline underline-offset-4 text-neutral">
              Description
            </p>
            <div className="p-6 opacity-90">
              <p>{desc}</p>
            </div>
          </div>

          <div className="sticky w-full h-16 bottom-0 bg-base-100 flex z-[1000] shadow-[0_12px_24px_0_rgba(0,0,0,0.5)]">
            <div className="flex m-2 space-x-2 w-full">
              <button className="" onClick={toggleFavorite}>
                {isFavorited ? <FavoriteOn /> : <FavoriteOff />}
              </button>
              <LuShare2 className="p-[0.4rem] w-12 h-12 btn" />
              <button className="flex-1 text-white btn btn-primary">
                <p className="px-8">Contact Agent</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PropertyModal;
