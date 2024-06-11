const Hero = () => {
  return (
    <div
      className="min-h-[600px] hero"
      style={{
        backgroundImage: "url(src/assets/hero.jpg)",
      }}
    >
      <div className="bg-opacity-35 hero-overlay"></div>
      <div className="text-white drop-shadow hero-content">
        <div className="max-w-2xl">
          <div className="mb-10">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl text-balance">
              Discover your new home
            </h1>
            <h2 className="mb-6 font-medium leading-6 opacity-80 text-md">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </h2>
          </div>

          <p className="opacity-80 drop-shadow label">
            Search for your area, eg. Willowbrook Estates
          </p>
          <label className="flex gap-2 items-center text-neutral input input-bordered input-primary">
            <input type="text" className="grow" placeholder="Search" />
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
        </div>
      </div>
    </div>
  );
};
export default Hero;
