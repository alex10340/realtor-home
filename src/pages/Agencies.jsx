import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import {
  Location01,
  Location02,
  Location03,
  Location04,
  Location05,
  Location06,
} from "../assets/locations";

import AgencyCard from "../components/AgencyCard";
import AgencySection from "../components/AgencySection";

import logoEvergreen from "../assets/alt logos/logoEvergreen.png";
import logoWillowbrook from "../assets/alt logos/logoWillowbrook.png";

const Agencies = () => {
  return (
    <div className="px-8 mx-auto max-w-[1350px]">
      <div className="flex gap-4 items-center my-12">
        <h1 className="flex-1 text-3xl font-bold lg:text-4xl">Agencies</h1>
        <Link to="/" className="shadow btn" onClick={scrollToTop}>
          Return
        </Link>
      </div>

      <div className="flex px-10 pb-24">
        <AgencyCard img={Location01} className={"-rotate-1"} />
        <AgencySection
          logo={logoEvergreen}
          name={"Evergreen Heights"}
          desc="AcmeHome Evergreen Heights has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
      </div>
      <div className="flex px-10 pb-24">
        <AgencySection
          logo={logoWillowbrook}
          name={"Willowbrook Estates"}
          desc="AcmeHome Willowbrook Estates has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
        <AgencyCard img={Location02} className={"rotate-1"} />
      </div>
    </div>
  );
};
export default Agencies;
