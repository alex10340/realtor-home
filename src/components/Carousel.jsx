import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";
import { houses } from "../data/allData";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const newListingsSliderRef = useRef(null);
  const collectionSliderRef = useRef(null);

  const newListings = houses.filter((house) => house.category == "New");
  const acmeHomeCollection = houses.filter(
    (house) => house.category == "Collection"
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    swipe: true, // set to false on modal
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className="p-2 btn btn-ghost">
      <svg
        className="w-8 h-8 text-neutral"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="p-2 btn btn-ghost">
      <svg
        className="w-8 h-8 text-neutral"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  return (
    <div
      className={`py-6 px-[12px] mx-auto max-w-[1350px] ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <div className="flex items-center p-2 pt-0">
        <h3 className="flex-1 text-2xl font-normal">New listings</h3>
        <div className="space-x-4">
          <PrevArrow onClick={() => newListingsSliderRef.current.slickPrev()} />
          <NextArrow onClick={() => newListingsSliderRef.current.slickNext()} />
        </div>
      </div>

      <div className="mx-[-12px]">
        <Slider ref={newListingsSliderRef} {...settings}>
          {newListings.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </Slider>
      </div>

      <div className="flex items-center p-2 pt-3">
        <h3 className="flex-1 text-2xl font-normal">AcmeHome Collection</h3>
        <div className="space-x-4">
          <PrevArrow onClick={() => collectionSliderRef.current.slickPrev()} />
          <NextArrow onClick={() => collectionSliderRef.current.slickNext()} />
        </div>
      </div>

      <div className="mx-[-12px]">
        <Slider ref={collectionSliderRef} {...settings}>
          {acmeHomeCollection.map((house) => (
            <Card key={house.id} house={house} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
