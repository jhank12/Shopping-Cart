import { configureStore } from "@reduxjs/toolkit";

import  cartSliceReducer  from "./cartSlice";
import  productsSliceReducer  from "./productsSlice";
import completedOrderSliceReducer from "./completedOrderSlice";

export const store = configureStore({
   reducer:{
      cart: cartSliceReducer,
      products: productsSliceReducer,
      order: completedOrderSliceReducer
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
