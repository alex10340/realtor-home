import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="sticky w-full top-0 bg-base-100 z-[1000] shadow-xl">
      <div className="mx-auto max-w-[1350px]">
        <div className="navbar px-[12px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="shadow-xl space-y-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="p-2">Locations</a>
              </li>
              <li>
                <a className="p-2">Agencies</a>
              </li>
              <li>
                <a className="p-2 text-white bg-primary hover:bg-secondary glass">
                  Showroom
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 justify-center sm:justify-normal">
            <a className="pl-2 text-xl btn btn-ghost" href="#">
              <div>
                <img src={Logo} alt="logo" className="w-10" />
              </div>
              <div className="">AcmeHome</div>
            </a>
          </div>
          <div className="flex-none gap-2 pr-2">
            <ul className="hidden space-x-2 menu menu-horizontal sm:flex">
              <li>
                <a>Locations</a>
              </li>
              <li>
                <a>Agencies</a>
              </li>
              <li>
                <a className="mx-2 text-white bg-primary hover:bg-secondary glass">
                  Showroom
                </a>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex="0"
                className="shadow-xl mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
