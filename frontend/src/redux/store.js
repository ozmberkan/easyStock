import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import feedbackReducer from "./slices/feedbackSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    feedbacks: feedbackReducer,
  },
});
