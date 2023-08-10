import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import usersReducer from "../redux/users/usersSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

export default store;
