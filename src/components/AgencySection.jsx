const AgencySection = ({ logo, name, desc }) => {
  return (
    <div className="flex items-center lg:px-6">
      <div>
        <div className="flex gap-2 items-center p-0 text-lg font-bold cursor-default md:pl-8 lg:text-xl no-animation">
          <img src={logo} alt="Agency Logo" className="w-12" />
          <p>AcmeHome {name}</p>
        </div>
        <div className="px-1 pt-5 md:px-10 opacity-85 prose">
          <p className="pb-5 text-balance">{desc}</p>

          <button className="text-white shadow-lg btn btn-wide btn-primary">
            Contact Agency
          </button>
        </div>
      </div>
    </div>
  );
};
export default AgencySection;
