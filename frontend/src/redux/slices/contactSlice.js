import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contacts: [],
  contact: null,
  status: "idle",
};

export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async () => {
    try {
      const response = await axios.get("http://localhost:5072/api/Contacts");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getContactById = createAsyncThunk(
  "contacts/getContactById",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5072/api/Contacts/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.status = "success";
        state.contacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getContactById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getContactById.fulfilled, (state, action) => {
        state.status = "success";
        state.contact = action.payload;
      })
      .addCase(getContactById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default contacts.reducer;
