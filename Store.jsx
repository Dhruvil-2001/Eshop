import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";  // ✅ Import the reducer
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {

    cart: cartSlice,
    products: productReducer,  // ✅ Ensure this matches what useSelector expects
  },
});

export default store;
