import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: "mediterranean",
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      console.log('action: ', action);
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      if(pizza.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = id => state => state.cart.cart.find(p => p.pizzaId === id)?.quantity ?? 0;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
