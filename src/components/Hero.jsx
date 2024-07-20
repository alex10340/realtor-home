import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/hero.jpg";

const locations = [
  "Evergreen Heights",
  "Willowbrook Estates",
  "Maplewood Grove",
  "Cedarview Harbor",
  "Silverleaf Meadows",
  "Magnolia Bay",
];

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/showroom?q=${encodeURIComponent(searchInput)}`);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (value) {
      setSuggestions(
        locations.filter((location) =>
          location.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
    navigate(`/showroom?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <div
      className="min-h-[500px] lg:min-h-[600px] hero"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="bg-opacity-55 bg-[#736f98] hero-overlay"></div>
      <div className="text-white drop-shadow hero-content">
        <div className="mx-auto max-w-xl">
          <div className="mb-20 text-center">
            <h1 className="mb-3 text-4xl font-extrabold lg:text-5xl text-balance">
              Discover your new home
            </h1>
            <h2 className="mb-6 font-medium leading-7 opacity-85 text-balance text-md">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </h2>
          </div>

          <div className="flex relative flex-col items-center w-full">
            <p className="drop-shadow opacity-85 label">
              Search for your area, eg. Evergreen Heights
            </p>
            <form
              onSubmit={handleSearch}
              className="flex relative gap-2 items-center w-full text-neutral input input-bordered"
            >
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchInput}
                onChange={handleInputChange}
              />
              <button type="submit">
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
              </button>

              {suggestions.length > 0 && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-full menu bg-base-100 rounded-box">
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>
                      <a onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
