import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit'

type CartState = {
   cart: { productId: number; name: string; price: number; quantity: number, id: string, image: string }[],

}

const initialState: CartState = {
   cart: [],


}



export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<{ productId: number; name: string; price: number; quantity: number; id: string, image: string }>) => {


         const itemIdx = state.cart.findIndex(item => item.productId === action.payload.productId);

         if (itemIdx >= 0) {
            state.cart[itemIdx].quantity += action.payload.quantity;
         } else {
            state.cart.push(action.payload)
         }



      },
      removeFromCart: (state, action: PayloadAction<string>) => {

         state.cart = state.cart.filter(item => {
            return item.id !== action.payload
         })

      },
      clearCart: (state) => {

         state.cart = [];
      },
      incrementQuantity: (state, action: PayloadAction<string>) => {
         const itemIdx = state.cart.findIndex(item => item.id === action.payload);

         state.cart[itemIdx].quantity++
      }
      ,
      decrementQuantity: (state, action: PayloadAction<string>) => {
         const itemIdx = state.cart.findIndex(item => item.id === action.payload);

         state.cart[itemIdx].quantity--


      },



   }
})

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer