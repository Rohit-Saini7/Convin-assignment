import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersList = createAsyncThunk(
  "getUsersList",
  async (object, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users");
      return data.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);
export const getSingleUser = createAsyncThunk(
  "getSingleUser",
  async (object, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users/" + object);
      return data.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const userSlice = createSlice({
  name: "usersList",
  initialState: {
    list: [],
    loading: false,
    isThereUser: false,
    message: "",
    singleUser: {},
  },
  reducers: {},
  extraReducers: {
    [getUsersList.pending]: (state) => {
      state.loading = true;
    },
    [getSingleUser.pending]: (state) => {
      state.loading = true;
    },

    [getUsersList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload;
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.singleUser = payload;
      state.isThereUser = true;
    },

    [getUsersList.rejected]: (state) => {
      state.message = "failed";
      state.loading = false;
    },
    [getSingleUser.rejected]: (state) => {
      state.message = "failed";
      state.loading = false;
    },
  },
});

export default userSlice;
