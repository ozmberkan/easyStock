import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Örnek Ürün",
      stock: 6,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Örnek Ürün 2",
      stock: 3,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
