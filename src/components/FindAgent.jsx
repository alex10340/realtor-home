import FindAgentImg from "../assets/findagent.jpg";

const FindAgent = () => {
  return (
    <div className="sm:py-10 px-[12px] mx-auto max-w-[1350px]">
      <div className="flex">
        <div className="hidden sm:block w-[40vw] max-w-[600px] m-[10px]">
          <figure className="overflow-hidden aspect-[12/16] rounded-2xl shadow-xl -rotate-1">
            <img src={FindAgentImg} alt="Find agent" />
          </figure>
        </div>
        <div className="py-5 px-10 sm:py-10 sm:w-[60vw]">
          <h2 className="mb-3 text-4xl font-bold text-center sm:text-left">
            Find your agent{" "}
            <span className="underline text-neutral">today</span>
          </h2>
          <div className="p-6 sm:hidden">
            <figure className="overflow-hidden aspect-[12/16] rounded-2xl shadow-xl rotate-1">
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
            <div className="hidden sm:block">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>
                  <p>
                    <strong>Expertise:</strong> Our agents have in-depth
                    knowledge of the local market and trends.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Personalized Service: </strong> We take the time to
                    understand your unique requirements.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Proven Track Record: </strong> We have successfully
                    helped numerous clients achieve their real estate goals.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Local Insights: </strong> Gain insights into
                    neighborhoods, schools, and amenities.
                  </p>
                </li>
              </ul>
            </div>

            <h2>Get Started Now</h2>
            <p className="hidden sm:block">
              Contact us to connect with one of our friendly agents who will
              guide you through the process with professionalism and care. Your
              perfect property or buyer is just a call away!
            </p>
            <button className="text-white btn btn-wide btn-primary">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindAgent;
