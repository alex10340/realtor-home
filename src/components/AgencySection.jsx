const AgencySection = ({ logo, name, desc }) => {
  return (
    <div className="flex items-center px-6">
      <div>
        <div className="px-8 text-xl cursor-default lg:text-2xl hover:bg-white btn btn-ghost no-animation">
          <img src={logo} alt="Agency Logo" className="w-12" />
          <p>AcmeHome {name}</p>
        </div>
        <div className="px-10 py-5 opacity-85 prose">
          <p className="pb-5">{desc}</p>

          <button className="text-white shadow-lg btn btn-wide btn-primary">
            Contact Agency
          </button>
        </div>
      </div>
    </div>
  );
};
export default AgencySection;
