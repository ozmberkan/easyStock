import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import contactSlice from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    contacts: contactSlice,
  },
});
