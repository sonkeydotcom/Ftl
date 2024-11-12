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
import { useState } from "react";
import FilterDataPage from "./pages/FilterDataPage";
import ResposiveNavBar from "./componets/NavBar/ResposiveNavBar";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
import TopSales from "./pages/TopSales/TopSales";
import BestCollections from "./pages/BestCollections/BestCollections";
import AllProduct from "./pages/AllProduct/AllProduct";
import Whatsapp from "./componets/Whatsapp/Whatsapp";
import CheckoutPage from "./pages/CheckOutPage";
import { CheckOutPage1 } from "./pages/checkout/CheckOutPage1";
import ProductMainDetails from "./pages/ProductDetailPage/ProductMainDetails";
import OrderComfirmationPage from "./pages/orderComfirmationPage/OrderComfirmationPage";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <div className="conatiner">
      <BrowserRouter>
        <ResposiveNavBar />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuNavbar />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/top-sales" element={<TopSales />} />
          <Route path="/best-collections" element={<BestCollections />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="/cart" element={<Cartpage />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/:id" element={<ProductMainDetails />} />
          <Route
            path="/checkout"
            element={<CheckOutPage setOrder={setOrder} />}
          />
          <Route path="/filter" element={<FilterDataPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderComfirmationPage />}
          />
        </Routes>

        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
