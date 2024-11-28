import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  feedbacks: [],
  status: "idle",
};

export const getAllFeedbacks = createAsyncThunk(
  "feedbacks/getAllFeedbacks",
  async () => {
    try {
      const response = await axios.get("http://localhost:5072/api/Feedbacks");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const feedbacks = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFeedbacks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllFeedbacks.fulfilled, (state, action) => {
        state.status = "success";
        state.feedbacks = action.payload;
      })
      .addCase(getAllFeedbacks.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default feedbacks.reducer;
