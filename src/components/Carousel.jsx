import Card from "./Card";

const Carousel = () => {
  return (
    <div className="py-8 px-[12px] mx-auto max-w-[1350px]">
      <h3 className="p-2 pt-0 text-xl font-medium">New listings</h3>
      <div className="flex justify-center">
        <Card image="house01.jpg" price="590 000€" location="Lakewood Valley" />
        <Card image="house02.jpg" price="590 000€" location="Maplewood Grove" />
        <Card
          image="house03.jpg"
          price="590 000€"
          location="Willowbrook Estates"
        />
        <Card
          image="house04.jpg"
          price="590 000€"
          location="Silverleaf Meadows"
        />
      </div>

      <h3 className="p-2 pt-8 text-xl font-medium">AcmeHome Collection</h3>
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
