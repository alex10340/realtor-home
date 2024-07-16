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
import logoMaplewood from "../assets/alt logos/logoMaplewood.png";
import logoCedarview from "../assets/alt logos/logoCedarview.png";
import logoSilverleaf from "../assets/alt logos/logoSilverleaf.png";
import logoMagnolia from "../assets/alt logos/logoMagnolia.png";

const Agencies = () => {
  return (
    <div className="px-8 mx-auto max-w-[1350px]">
      <div className="flex gap-4 items-center my-12">
        <h1 className="flex-1 text-3xl font-bold lg:text-4xl">Agencies</h1>
        <Link to="/" className="shadow btn" onClick={scrollToTop}>
          Return
        </Link>
      </div>

      <div className="flex pb-24">
        <AgencyCard img={Location01} className={"hidden md:block"} />
        <AgencySection
          logo={logoEvergreen}
          name={"Evergreen Heights"}
          desc="AcmeHome Evergreen Heights has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
      </div>
      <div className="flex pb-24">
        <AgencySection
          logo={logoWillowbrook}
          name={"Willowbrook Estates"}
          desc="AcmeHome Willowbrook Estates has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
        <AgencyCard img={Location02} className={"hidden md:block"} />
      </div>

      <div className="flex pb-24">
        <AgencyCard img={Location03} className={"hidden md:block"} />
        <AgencySection
          logo={logoMaplewood}
          name={"Maplewood Grove"}
          desc="AcmeHome Maplewood Grove has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
      </div>

      <div className="flex pb-24">
        <AgencySection
          logo={logoCedarview}
          name={"Cedarview Harbor"}
          desc="AcmeHome Cedarview Harbor has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
        <AgencyCard img={Location04} className={"hidden md:block"} />
      </div>

      <div className="flex pb-24">
        <AgencyCard img={Location05} className={"hidden md:block"} />
        <AgencySection
          logo={logoSilverleaf}
          name={"Silverleaf Meadows"}
          desc="AcmeHome Silverleaf Meadows has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
      </div>

      <div className="flex pb-24">
        <AgencySection
          logo={logoMagnolia}
          name={"Magnolia Bay"}
          desc="AcmeHome Magnolia Bay has a team of experienced real estate
            agents committed to assisting you in finding your ideal home or
            listing your property with personalized service."
        />
        <AgencyCard img={Location06} className={"hidden md:block"} />
      </div>
    </div>
  );
};
export default Agencies;
