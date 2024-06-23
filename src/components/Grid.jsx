import GridItem from "./GridItem";

const Grid = () => {
  return (
    <div className="py-10 px-[12px] mx-auto max-w-[1350px]">
      <h3 className="p-2 pt-0 pb-4 text-2xl font-normal">Most popular areas</h3>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3">
        <GridItem
          image="location01.jpg"
          location="Evergreen Heights"
        ></GridItem>
        <GridItem
          image="location02.jpg"
          location="Willowbrook Estates"
        ></GridItem>
        <GridItem image="location03.jpg" location="Maplewood Grove"></GridItem>
        <GridItem image="location04.jpg" location="Cedarview Harbor"></GridItem>
        <GridItem
          image="location05.jpg"
          location="Silverleaf Meadows"
        ></GridItem>
        <GridItem image="location06.jpg" location="Magnolia Bay"></GridItem>
      </div>
    </div>
  );
};
export default Grid;
