import { Link } from "react-router-dom";
import FindAgentImg from "../assets/findagent.jpg";

const FindAgent = () => {
  return (
    <div className="sm:py-10 px-[12px] mx-auto max-w-[1350px]">
      <div className="flex justify-center">
        <div className="hidden sm:block m-[10px]">
          <figure className="overflow-hidden rounded-2xl shadow-xl -rotate-1 max-w-[400px]">
            <img src={FindAgentImg} alt="Find agent" />
          </figure>
        </div>

        <div className="px-10 py-5 sm:py-10">
          <h2 className="mb-3 text-4xl font-bold text-center sm:text-left">
            Find your agent{" "}
            <span className="underline text-neutral">today</span>
          </h2>

          <div className="p-6 sm:hidden">
            <figure className="overflow-hidden rounded-2xl shadow-xl rotate-1">
              <img src={FindAgentImg} alt="Find agent" />
            </figure>
          </div>

          <div className="py-5 opacity-85 prose">
            <p>
              Looking to buy or sell a property? Our experienced team of real
              estate agents is here to help you every step of the way. Whether
              you're searching for your dream home or looking to list your
              property, our dedicated agents are committed to providing
              exceptional service tailored to your needs.
            </p>

            <h2 className="">Get Started Now</h2>
            <p className="hidden sm:block">
              Connect with one of our friendly agents who will guide you through
              the process with professionalism and care. Your perfect property
              or buyer is just a call away!
            </p>

            <Link
              to={"/agencies"}
              className="text-white shadow-lg btn btn-wide btn-primary"
            >
              Browse Agencies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindAgent;
