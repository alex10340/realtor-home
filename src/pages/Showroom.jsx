import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import { houses } from "../data/allData";
import Card from "../components/Card";

const Showroom = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedListingType, setSelectedListingType] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  useEffect(() => {
    scrollToTop();
  }, []);

  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  const locations = Array.from(new Set(houses.map((house) => house.location)));

  const listingTypes = Array.from(
    new Set(houses.map((house) => house.listingType))
  );

  const filteredHouses = houses.filter((house) => {
    const matchesLocation = selectedLocation
      ? house.location === selectedLocation
      : true;
    const matchesListingType = selectedListingType
      ? house.listingType === selectedListingType
      : true;
    const matchesQ = q
      ? house.location?.toLowerCase().includes(q.toLowerCase()) ||
        house.listingType?.toLowerCase().includes(q.toLowerCase())
      : true;

    return matchesLocation && matchesListingType && matchesQ;
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

      <div className="flex gap-4 max-lg:flex-wrap">
        <label className="flex gap-2 items-center w-full max-w-xs input input-bordered">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={q}
            onChange={(e) =>
              setSearchParams(
                (prev) => {
                  prev.set("q", e.target.value);
                  return prev;
                },
                { replace: true }
              )
            }
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
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

      {sortedHouses.length > 0 ? (
        <>
          <p className="my-10 text-xl font-medium">{`${sortedHouses.length} houses matching criteria`}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[-10px] mb-12">
            {sortedHouses.map((house) => (
              <Card key={house.id} house={house} />
            ))}
          </div>
        </>
      ) : (
        <p className="my-24 text-xl font-medium text-center">
          No houses found matching the criteria
          <span className="text-base font-normal opacity-85">
            <br />
            Try changing your filtering settings.
          </span>
        </p>
      )}
    </div>
  );
};

export default Showroom;
