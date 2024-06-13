const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1350px]">
      <div className="navbar px-[12px]">
        <div className="flex-1">
          <a className="pl-2 text-xl btn btn-ghost" href="#">
            <div>
              <img src="src/assets/icon.png" alt="logo" className="w-10" />
            </div>
            AcmeHome
          </a>
        </div>
        <div className="flex-none gap-2 pr-2">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a>Membership</a>
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
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
  );
};
export default Navbar;
