import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import { houses } from "../data/allData";
import Card from "../components/Card";

const Showroom = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedListingType, setSelectedListingType] = useState("");

  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  const locations = Array.from(new Set(houses.map((house) => house.location)));

  const listingTypes = Array.from(
    new Set(houses.map((house) => house.listingType))
  );

  const filteredHouses = houses.filter((house) => {
    return (
      (selectedLocation ? house.location === selectedLocation : true) &&
      (selectedListingType ? house.listingType === selectedListingType : true)
    );
  });

  const sortedHouses = filteredHouses.slice().sort((a, b) => {
    if (sortOption === "priceLowToHigh") {
      return parsePrice(a.price) - parsePrice(b.price);
    }
    if (sortOption === "priceHighToLow") {
      return parsePrice(b.price) - parsePrice(a.price);
    }
    return 0;
  });

  return (
    <div className="px-8 mx-auto max-w-[1350px]">
      <div className="flex gap-4 items-center my-12 mb-10">
        <h1 className="flex-1 text-3xl font-bold lg:text-4xl">Showroom</h1>
        <Link to="/" className="shadow btn" onClick={scrollToTop}>
          Return
        </Link>
      </div>

      <p className="mb-2 font-medium">Filters</p>

      <div className="flex gap-4 mb-6 max-sm:flex-wrap">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full max-w-xs select select-bordered"
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <select
          value={selectedListingType}
          onChange={(e) => setSelectedListingType(e.target.value)}
          className="w-full max-w-xs select select-bordered"
        >
          <option value="">All Listing Types</option>
          {listingTypes.map((listingType) => (
            <option key={listingType} value={listingType}>
              {listingType}
            </option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full max-w-xs select select-bordered"
        >
          <option value="">Sort by Price</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[-10px] mb-12">
        {sortedHouses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Showroom;
