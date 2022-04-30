import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { loadState, saveState } from './../../localStorage';

const initialState = {
  products: loadState() || [],
  status: "idle",
  error: null,
}
// 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload

      const existItem = state.products.find((x) => x._id === item._id)

      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x._id === existItem._id ? {...item , count: x.count + 1} : x
          ),
        }
      } else {
        return {
          ...state,
          products: [...state.products, {...item , count: 1} ],
        }
      }
      
      
    },
    removeFromCart(state, action) {

      const item = action.payload
      const existItem = state.products.find((x) => x._id === item._id)

      if (existItem.count != 1) {
        return {
          ...state,
          products: state.products.map((x) =>
            x._id === existItem._id ? { ...item, count: x.count - 1 } : x
          ),
        }
      } else {
        return {
          ...state,
          products: state.products.filter((x) => x._id !== item._id),
        }
      }
    },
  },
})
export const { addToCart, removeFromCart } = cartSlice.actions
export const selectCartItems = (state) => state.cart.products
export default cartSlice.reducer
