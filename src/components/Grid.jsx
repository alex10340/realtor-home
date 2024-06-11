import GridItem from "./GridItem";

const Grid = () => {
  return (
    <div className="py-8 px-[12px] mx-auto max-w-[1350px]">
      <h3 className="p-2 pt-0 text-xl font-medium">Most popular areas</h3>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3">
        <GridItem image="location01.jpg" location="Lakewood Valley"></GridItem>
        <GridItem image="location02.jpg" location="Maplewood Grove"></GridItem>
        <GridItem image="location03.jpg" location="Maplewood Grove"></GridItem>
        <GridItem image="location04.jpg" location="Maplewood Grove"></GridItem>
        <GridItem image="location05.jpg" location="Maplewood Grove"></GridItem>
        <GridItem image="location06.jpg" location="Maplewood Grove"></GridItem>
      </div>
    </div>
  );
};
export default Grid;
