import { PayloadAction, createSlice } from '@reduxjs/toolkit'



type OrderItem = {
   productId: number; name: string; price: number; quantity: number, id: string, image: string
}

type OrderState = {
   order: OrderItem[]
}



const initialState: OrderState = {

   order: []

}


export const completedOrderSlice = createSlice({

   name: 'completedOrder',
   initialState,
   reducers: {
      setCompletedOrder: (state, action: PayloadAction<{ productId: number; name: string; price: number; quantity: number; id: string, image: string }[]>) => {

         state.order = action.payload
         
      },
      clearCompletedOrder: (state) => {
         state.order = []
      }
   }

})

export const {setCompletedOrder, clearCompletedOrder} = completedOrderSlice.actions 

export default completedOrderSlice.reducer