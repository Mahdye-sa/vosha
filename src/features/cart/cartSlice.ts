import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { Product } from "../../interfaces/product";

// const fakeProduct: Product = {
//   id: 5,
//   img: "sjhxsuhx",
//   title: "flower",
//   price: 250,
//   quantity: 5,
//   totalPrice: 1,
// };

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
      }
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (!item) return;

      item.quantity--;
      item.totalPrice = item.price * item.quantity;

      if (item.quantity <= 0) {
        state.cart = state.cart.filter((i) => i.id !== action.payload);
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCurrentQuantityById =
  (ProductId: number) => (state: RootState) =>
    state.cart.cart.find((item: Product) => item.id === ProductId)?.quantity ??
    0;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
