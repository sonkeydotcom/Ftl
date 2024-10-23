import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
  totalPrice: 0,
  totalQuantity: 0,
};
const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.product.findIndex(
        (item) => item.id === newItem.id
      );

      if (itemIndex !== -1) {
        state.product[itemIndex].quantity++;
        state.product[itemIndex].totalPrice += newItem.price;
      } else {
        state.product.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.Images,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.product = state.product.filter((item) => item.id !== id);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },
    clearCart(state) {
      state.product = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = Cartslice.actions;

export default Cartslice.reducer;
