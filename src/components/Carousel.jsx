import { useState, useEffect, useRef } from "react";
import Card from "./Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  const newListingsSliderRef = useRef(null);
  const collectionSliderRef = useRef(null);

  const CustomArrow = ({ onClick, type }) => (
    <button onClick={onClick} className="w-10 h-10 rounded-full bg-primary">
      {type === "next" ? "->" : "<-"}
    </button>
  );

  return (
    <div
      className={`py-8 px-[12px] mx-auto max-w-[1350px] ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <div className="flex">
        <h3 className="flex-1 p-2 pt-0 text-xl font-medium">New listings</h3>
        <div className="space-x-4">
          <CustomArrow
            onClick={() => newListingsSliderRef.current.slickPrev()}
            type="prev"
          />
          <CustomArrow
            onClick={() => newListingsSliderRef.current.slickNext()}
            type="next"
          />
        </div>
      </div>

      <div className="mx-[-12px]">
        <Slider ref={newListingsSliderRef} {...settings} className="">
          <Card
            image="house01.jpg"
            price="590 000€"
            location="Evergreen Heights"
          />
          <Card
            image="house02.jpg"
            price="590 000€"
            location="Silverleaf Meadows"
          />
          <Card
            image="house03.jpg"
            price="590 000€"
            location="Evergreen Heights"
          />
          <Card
            image="house04.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house05.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house06.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house07.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house08.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
        </Slider>
      </div>

      <div className="flex">
        <h3 className="flex-1 p-2 pt-3 text-xl font-medium">
          AcmeHome Collection
        </h3>
        <div className="space-x-4">
          <CustomArrow
            onClick={() => collectionSliderRef.current.slickPrev()}
            type="prev"
          />
          <CustomArrow
            onClick={() => collectionSliderRef.current.slickNext()}
            type="next"
          />
        </div>
      </div>

      <div className="mx-[-12px]">
        <Slider ref={collectionSliderRef} {...settings} className="">
          <Card
            image="house01.jpg"
            price="590 000€"
            location="Evergreen Heights"
          />
          <Card
            image="house02.jpg"
            price="590 000€"
            location="Silverleaf Meadows"
          />
          <Card
            image="house03.jpg"
            price="590 000€"
            location="Evergreen Heights"
          />
          <Card
            image="house04.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house05.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house06.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house07.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
          <Card
            image="house08.jpg"
            price="590 000€"
            location="Willowbrook Estates"
          />
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
