import { configureStore } from "@reduxjs/toolkit";
import wheatherReducer from "../redux/slices/wheatherSlice";

export const store = configureStore({
  reducer: {
    wheather: wheatherReducer,
  },
});
