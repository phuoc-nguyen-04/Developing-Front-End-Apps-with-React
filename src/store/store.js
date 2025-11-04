import { configureStore, createSlice, createSelector } from "https://esm.sh/@reduxjs/toolkit@2";
import { products } from "../data/products.js";

const initialState = {
  itemsById: {}, // id -> { id, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload; // {id, name, price, image}
      if (!state.itemsById[item.id]) {
        state.itemsById[item.id] = { ...item, quantity: 1 };
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      const entry = state.itemsById[id];
      if (entry) entry.quantity += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      const entry = state.itemsById[id];
      if (entry) {
        entry.quantity -= 1;
        if (entry.quantity <= 0) delete state.itemsById[id];
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.itemsById[id];
    },
    clear: (state) => {
      state.itemsById = {};
    },
  },
});

export const { addItem, increment, decrement, removeItem, clear } = cartSlice.actions;

export const selectItemsArray = (state) => Object.values(state.cart.itemsById);
export const selectItemIds = (state) => new Set(Object.keys(state.cart.itemsById));

export const selectTotalCount = createSelector([selectItemsArray], (items) =>
  items.reduce((sum, it) => sum + it.quantity, 0)
);

export const selectTotalCost = createSelector([selectItemsArray], (items) =>
  items.reduce((sum, it) => sum + it.price * it.quantity, 0)
);

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});


