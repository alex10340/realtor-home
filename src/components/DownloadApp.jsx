import Logo from "../assets/logo.png";

const DownloadApp = () => {
  return (
    <div className="px-10 mx-auto max-w-[1350px]">
      <h3 className="mb-10 text-4xl font-bold prose">
        Download the AcmeHome App
      </h3>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="AcmeHome logo" />
              <p className="text-2xl font-bold">AcmeHome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
