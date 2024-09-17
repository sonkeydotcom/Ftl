import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import Cartslice from "./CartSlice";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    cart: Cartslice,
  },
});
