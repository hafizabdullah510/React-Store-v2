import { createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "../../utils/types";
import type { PayloadAction } from "@reduxjs/toolkit";

type AddToCartPayload = {
  payload: CartItem;
};

type UpdateCartItemPayload = {
  productId: number;
  color: string;
};

type CartState = {
  cartItems: CartItem[];
  totalItems: number;
  subtotal: number;
  orderTotal: number;
};

const initialState: CartState = {
  cartItems: JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  ) as CartItem[],
  totalItems: 0,
  subtotal: 0,
  orderTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: <T extends AddToCartPayload>(state: CartState, action: T) => {
      const cartItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) =>
          item.productId === cartItem.productId && item.color === cartItem.color
      );
      if (existingItem) {
        existingItem.amount += cartItem.amount;
      } else {
        state.cartItems.push(cartItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCartItem: (
      state: CartState,
      action: PayloadAction<UpdateCartItemPayload>
    ) => {
      const { productId, color } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item.productId === productId && item.color === color)
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateItemAmount: (
      state: CartState,
      action: PayloadAction<UpdateCartItemPayload & { amount: number }>
    ) => {
      const { productId, color, amount } = action.payload;
      const item = state.cartItems.find(
        (item) => item.productId === productId && item.color === color
      );
      if (item) {
        item.amount = amount;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    updateCartTotals: (state: CartState) => {
      let totalItems = 0;
      let subtotal = 0;
      state.cartItems.forEach((item) => {
        totalItems += item.amount;
        subtotal += parseFloat(item.price) * item.amount;
      });
      state.totalItems = totalItems;
      state.subtotal = subtotal;
      state.orderTotal = subtotal + 2000; // assuming a fixed shipping and tax for simplicity
    },
  },
});

export const { addToCart, removeCartItem, updateItemAmount, updateCartTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
