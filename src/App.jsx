import MenuNavbar from "./componets/MenuNavbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabvar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ProductPage from "./pages/ProductPage";
import Collections from "./pages/Collections";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchPage from "./pages/SearchPage";
import Cartpage from "./pages/Cartpage";
import ProductDetails from "./pages/ProductDetails";
import CheckOutPage from "./pages/CheckOutPage";
import OrderComfirmation from "./pages/OrderComfirmation";
import { useState } from "react";
import FilterDataPage from "./pages/FilterDataPage";
import ResposiveNavBar from "./componets/NavBar/ResposiveNavBar";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <div className="conatiner">
      <BrowserRouter>
        <ResposiveNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuNavbar />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/checkout"
            element={<CheckOutPage setOrder={setOrder} />}
          />
          <Route path="/filter" element={<FilterDataPage />} />
        </Routes>

        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
