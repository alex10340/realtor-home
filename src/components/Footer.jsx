import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-base-300">
        <footer className="max-w-[1350px] p-10 footer max-md:footer-center text-base-content">
          <aside>
            <div className="flex gap-2 items-center p-0 text-lg font-bold cursor-default lg:text-xl hover:bg-base-300 no-animation">
              <img src={logo} alt="Logo" className="w-12" />
              <p>AcmeHome</p>
            </div>{" "}
            <p className="opacity-85">
              AcmeHome Real Estate Ltd.
              <br />
              Your real estate platform since 2004
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Links</h6>
            <Link to={"/"} className="link link-hover" onClick={scrollToTop}>
              Home page
            </Link>
            <Link
              to={"/saved"}
              className="link link-hover"
              onClick={scrollToTop}
            >
              Saved properties
            </Link>
            <Link
              to={"/agencies"}
              className="link link-hover"
              onClick={scrollToTop}
            >
              Agencies
            </Link>
            <Link
              to={"/showroom"}
              className="link link-hover"
              onClick={scrollToTop}
            >
              Showroom
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
};
export default Footer;
