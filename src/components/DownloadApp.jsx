import Logo from "../assets/logo.png";
import PhoneScreenshot from "../assets/phonescreenshot.png";
import AppStores from "../assets/appstores.png";

const DownloadApp = () => {
  return (
    <div className="bg-base-200">
      <div className="sm:py-10 px-[12px] mx-auto max-w-[1350px] flex justify-center">
        <div className="flex mx-auto">
          <div className="hidden sm:block max-w-[300px] m-[10px]">
            <figure className="overflow-hidden rounded-2xl drop-shadow-xl -rotate-1">
              <img src={PhoneScreenshot} alt="Find agent" />
            </figure>
          </div>
          <div className="px-10 py-10">
            <h2 className="mb-2 text-4xl font-bold text-center sm:text-left">
              Download the{" "}
              <span className="underline text-neutral">AcmeHome app</span>
            </h2>
            <div className="p-8 sm:hidden max-w-[300px] m-[10px] mx-auto">
              <figure className="overflow-hidden rounded-2xl drop-shadow-xl -rotate-1">
                <img src={PhoneScreenshot} alt="Find agent" />
              </figure>
            </div>
            <div className="py-5 pt-0 opacity-85 prose">
              <p>
                Discover the ultimate home-buying experience with our app, where
                you can browse thousands of properties, get instant updates on
                new listings and price changes, save your favorites, connect
                directly with agents, and access real-time market insights—all
                at your fingertips. Download it today on the App Store and
                Google Play and start your journey towards finding your dream
                home.
              </p>
              <h3>Available on the App Store and Google Play.</h3>
              <img
                src={AppStores}
                alt="google play and apple store logo"
                className="mt-10 w-64 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
