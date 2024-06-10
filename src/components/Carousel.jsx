import Card from "./Card";

const Carousel = () => {
  return (
    <div>
      <div className="flex justify-center lg:mx-40">
        <Card image="house01.jpg" price="590 000€" />
        <Card image="house02.jpg" price="590 000€" />
        <Card image="house03.jpg" price="590 000€" />
        <Card image="house04.jpg" price="590 000€" />
      </div>
    </div>
  );
};
export default Carousel;
