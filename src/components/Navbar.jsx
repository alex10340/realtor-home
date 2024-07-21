import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import logo from "../assets/logo.png";
import user from "../assets/user.webp";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  // Handle clicks outside of the dropdowns
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      const dropdown = dropdownRef.current;
      if (dropdown.hasAttribute("open")) {
        dropdown.removeAttribute("open");
      }
    }

    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target)
    ) {
      const dropdown = userDropdownRef.current;
      if (dropdown.hasAttribute("open")) {
        dropdown.removeAttribute("open");
      }
    }
  };

  // Handle scroll to close the dropdowns
  const handleScroll = () => {
    if (dropdownRef.current && dropdownRef.current.hasAttribute("open")) {
      dropdownRef.current.removeAttribute("open");
    }
    if (
      userDropdownRef.current &&
      userDropdownRef.current.hasAttribute("open")
    ) {
      userDropdownRef.current.removeAttribute("open");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close the dropdowns
  const closeDropdowns = () => {
    if (dropdownRef.current && dropdownRef.current.hasAttribute("open")) {
      dropdownRef.current.removeAttribute("open");
    }
    if (
      userDropdownRef.current &&
      userDropdownRef.current.hasAttribute("open")
    ) {
      userDropdownRef.current.removeAttribute("open");
    }
  };

  return (
    <div className="sticky w-full top-0 bg-base-100 z-[1000] shadow-xl">
      <div className="mx-auto max-w-[1350px]">
        <div className="navbar px-[12px]">
          <details className="dropdown" ref={dropdownRef}>
            <summary
              tabIndex={0}
              role="button"
              className="btn btn-ghost sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </summary>
            <ul
              tabIndex={0}
              className="shadow-xl space-y-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to={"/saved"}
                  className="p-2"
                  onClick={() => {
                    scrollToTop();
                    closeDropdowns();
                  }}
                >
                  Saved
                </Link>
              </li>
              <li>
                <Link
                  to={"/agencies"}
                  className="p-2"
                  onClick={() => {
                    scrollToTop();
                    closeDropdowns();
                  }}
                >
                  Agencies
                </Link>
              </li>
              <li>
                <Link
                  to={"/showroom"}
                  className="p-2 text-white bg-primary hover:bg-secondary glass"
                  onClick={() => {
                    scrollToTop();
                    closeDropdowns();
                  }}
                >
                  Showroom
                </Link>
              </li>
            </ul>
          </details>
          <div className="flex-1 justify-center sm:justify-normal">
            <Link
              to={"/"}
              className="pl-2 text-xl btn btn-ghost"
              onClick={() => {
                scrollToTop();
                closeDropdowns();
              }}
            >
              <div>
                <img src={logo} alt="logo" className="w-10" />
              </div>
              <div className="">AcmeHome</div>
            </Link>
          </div>
          <div className="flex-none gap-2 pr-2">
            <ul className="hidden space-x-2 menu menu-horizontal sm:flex">
              <li>
                <Link
                  to={"/saved"}
                  onClick={() => {
                    scrollToTop();
                    closeDropdowns();
                  }}
                >
                  Saved
                </Link>
              </li>
              <li>
                <Link
                  to={"/agencies"}
                  onClick={() => {
                    scrollToTop();
                    closeDropdowns();
                  }}
                >
                  Agencies
                </Link>
              </li>
              <li>
                <Link
                  to={"/showroom"}
                  className="mx-2 text-white bg-primary hover:bg-secondary glass"
                  onClick={() => {
                    scrollToTop();
                    closeDropdowns();
                  }}
                >
                  Showroom
                </Link>
              </li>
            </ul>
            <details className="dropdown dropdown-end" ref={userDropdownRef}>
              <summary
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={user} />
                </div>
              </summary>
              <ul
                tabIndex="0"
                className="shadow-xl mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between" onClick={closeDropdowns}>
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a onClick={closeDropdowns}>Settings</a>
                </li>
                <li>
                  <a onClick={closeDropdowns}>Logout</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
