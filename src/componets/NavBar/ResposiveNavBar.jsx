import React, { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import MobileSearchBar from "../SearchBarcom/MobileSearchBar";

const ResposiveNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
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
  return (
    <div>
      <DesktopNavBar
        openMenuHandle={openMenuHandle}
        open={open}
        handleCartOpen={handleCartOpen}
        openSearchHandle={openSearchHandle}
      />
      <MobileNavBar closeMenuHandle={closeMenuHandle} isOpen={isOpen} />
      <MobileSearchBar
        closeSearchHandle={closeSearchHandle}
        openSearch={openSearch}
      />
    </div>
  );
};

export default ResposiveNavBar;
