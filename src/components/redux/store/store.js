import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../createSlice/createSlice";

export const store = configureStore({
  reducer: {
    products: productReducer 
  }
})