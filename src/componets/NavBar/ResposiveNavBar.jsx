import React, { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import MobileSearchBar from "../SearchBarcom/MobileSearchBar";
import CartSide from "../SideCartOpening/CartSide";
import LoginSlide from "../LoginSlide/LoginSlide";

const ResposiveNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const openSearchHandle = () => {
    setOpenSearch(true);
  };

  const closeSearchHandle = () => {
    setOpenSearch(false);
  };
  const openMenuHandle = () => {
    setIsOpen(true);
  };

  const closeMenuHandle = () => {
    setIsOpen(false);
  };

  const handleCartOpen = () => {
    setOpenCart(true);
  };

  const handleCartClose = () => {
    setOpenCart(false);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };
  const handleLoginOpen = () => {
    setOpenLogin(true);
  };
  return (
    <div>
      <DesktopNavBar
        openMenuHandle={openMenuHandle}
        open={open}
        handleCartOpen={handleCartOpen}
        openSearchHandle={openSearchHandle}
        handleLoginOpen={handleLoginOpen}
      />
      <MobileNavBar closeMenuHandle={closeMenuHandle} isOpen={isOpen} />
      <MobileSearchBar
        closeSearchHandle={closeSearchHandle}
        openSearch={openSearch}
      />
      <CartSide handleCartClose={handleCartClose} openCart={openCart} />
      <LoginSlide handleLoginClose={handleLoginClose} openLogin={openLogin} />
    </div>
  );
};

export default ResposiveNavBar;
