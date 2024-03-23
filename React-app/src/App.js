import { Route, Routes } from "react-router-dom";
import NavbarCode from "./Components/Navbar/NavbarCode";
import HomeCode from "./Components/Home/HomeCode";
import CarsCode from "./Components/Cars/CarsCode";
import ImdbCode from "./Components/IMDB/ImdbCode";
import CurrencyCode from "./Components/Currency/CurrencyCode";

function App() {
  return (
    <div>
      <NavbarCode />
      <Routes>
        <Route path="/" element={<HomeCode />} />
        <Route path="/cars" element={<CarsCode />} />
        <Route path="/imdb" element={<ImdbCode />} />
        <Route path="/currency" element={<CurrencyCode />} />
      </Routes>
    </div>
  );
}

export default App;
