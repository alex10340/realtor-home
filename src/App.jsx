import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Grid from "./components/Grid";
import FindAgent from "./components/FindAgent";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Carousel></Carousel>
      <Grid></Grid>
      <FindAgent></FindAgent>
      <DownloadApp></DownloadApp>
      <Footer></Footer>
    </>
  );
};
export default App;
