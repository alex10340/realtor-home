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
            <label className="flex gap-2 mt-5 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dracula"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
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
