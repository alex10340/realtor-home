import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/hero.jpg";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/showroom?q=${encodeURIComponent(searchInput)}`);
    }
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
        <div className="max-w-xl">
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

          <div className="flex flex-col items-center">
            <p className="drop-shadow opacity-85 label">
              Search for your area, eg. Evergreen Heights
            </p>
            <form
              onSubmit={handleSearch}
              className="flex gap-2 items-center w-full text-neutral input input-bordered"
            >
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
