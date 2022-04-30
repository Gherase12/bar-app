import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { selectCartItems } from "../features/cart/cartSlice";
import { loadState } from './../localStorage';


// const preloadedState = loadState();

export default  configureStore({
  reducer: {
    cart: cartReducer,
  },
  // preloadedState:{cart: loadState()},
})
