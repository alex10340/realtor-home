import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Agencies from "./pages/Agencies";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Showroom from "./pages/Showroom";

import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <>
      <Navbar />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/showroom" element={<Showroom />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </>
  );
};
export default App;
