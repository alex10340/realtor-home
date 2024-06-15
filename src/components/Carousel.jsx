import React, { useState, useEffect } from "react";

import Card from "./Card";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`py-8 px-[12px] mx-auto max-w-[1350px] ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <h3 className="p-2 pt-0 font-serif text-2xl font-bold">New listings</h3>
      <div className="flex justify-center">
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
      </div>

      <h3 className="p-2 pt-8 font-serif text-2xl font-bold">
        AcmeHome Collection
      </h3>
      <div className="flex justify-center">
        <Card image="house05.jpg" price="590 000€" location="Lakewood Valley" />
        <Card image="house06.jpg" price="590 000€" location="Maplewood Grove" />
        <Card
          image="house07.jpg"
          price="590 000€"
          location="Willowbrook Estates"
        />
        <Card
          image="house08.jpg"
          price="590 000€"
          location="Silverleaf Meadows"
        />
      </div>
    </div>
  );
};
export default Carousel;
