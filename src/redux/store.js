import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    usersList: userSlice.reducer,
  },
});

export default store;
