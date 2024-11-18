import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Örnek Ürün",
      stock: 6,
      createdAt: "13.11.2024",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Örnek Ürün 2",
      stock: 3,
      createdAt: "17.11.2024",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Örnek Ürün 3",
      stock: 25,
      createdAt: "15.11.2024",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Örnek Ürün 3",
      stock: 45,
      createdAt: "15.11.2024",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
