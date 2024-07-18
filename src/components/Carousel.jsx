import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./carousel arrows/CarouselArrows";

import Card from "./Card";
import { houses } from "../data/allData";

const Carousel = () => {
  const [loadingEffect, setLoadingEffect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const newListingsSliderRef = useRef(null);
  const collectionSliderRef = useRef(null);

  const newListings = houses.filter((house) => house.category == "New");
  const acmeHomeCollection = houses.filter(
    (house) => house.category == "Collection"
  );

  useEffect(() => {
    setLoadingEffect(true);
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    swipe: !modalVisible, // set to false on modal
    swipeToSlide: true,
    arrows: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1275,
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

  return (
    <div
      className={`py-6 px-[12px] mx-auto max-w-[1350px] ${
        loadingEffect ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <div className="flex items-center p-2 pt-0">
        <h3 className="flex-1 text-2xl font-normal">New listings</h3>
        <div className="space-x-4">
          <PrevArrow
            onClick={() => newListingsSliderRef.current.slickPrev()}
            btnType="btn-ghost"
          />
          <NextArrow
            onClick={() => newListingsSliderRef.current.slickNext()}
            btnType="btn-ghost"
          />
        </div>
      </div>

      <div className="mx-[-12px]">
        <Slider ref={newListingsSliderRef} {...settings}>
          {newListings.map((house) => (
            <Card key={house.id} house={house} toggleModal={toggleModal} />
          ))}
        </Slider>
      </div>

      <div className="flex items-center p-2 pt-3">
        <h3 className="flex-1 text-2xl font-normal">AcmeHome Collection</h3>
        <div className="space-x-4">
          <PrevArrow
            onClick={() => collectionSliderRef.current.slickPrev()}
            btnType="btn-ghost"
          />
          <NextArrow
            onClick={() => collectionSliderRef.current.slickNext()}
            btnType="btn-ghost"
          />
        </div>
      </div>

      <div className="mx-[-12px]">
        <Slider ref={collectionSliderRef} {...settings}>
          {acmeHomeCollection.map((house) => (
            <Card key={house.id} house={house} toggleModal={toggleModal} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
