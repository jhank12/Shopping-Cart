import { createSlice } from '@reduxjs/toolkit';


type ProductsState = {
   products: {
      productId: number; name: string; price: number; image: string;
   }[]
}

const initialState: ProductsState = {
   products: [
      { productId: 1, name: "Squat Rack", price: 795, image: '/images/squat-rack.png' },
      { productId: 2, name: "Squat Stand", price: 395, image: '/images/squat-stand.png' },
      { productId: 3, name: "Barbell", price: 305, image: '/images/barbell.png' },
      { productId: 4, name: "Cast Iron Plate", price: 155, image: '/images/iron-plate.png' },
      { productId: 5, name: "Bumper Plate", price: 200, image: '/images/plate.png' },
      { productId: 6, name: "Shirt", price: 27.50, image: '/images/tshirt.png' },
      { productId: 7, name: "Hex Bar", price: 395, image: '/images/hex-bar.png' },
      { productId: 8, name: "Dumbbell", price: 30, image: '/images/dumbbell.png' },
      { productId: 9, name: "Kettlebell", price: 30, image: '/images/kettlebell.png' },
      

   ]
}

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      
   }
})


export default productsSlice.reducer