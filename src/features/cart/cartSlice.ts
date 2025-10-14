import { createSlice } from "@reduxjs/toolkit";

interface product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const fakeProduct: product = {
  id: 120,
  title: "flower",
  price: 250,
  quantity: 1,
  totalPrice: 1,
};

const initialState = {
  cart: [fakeProduct],
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
      if (item) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
