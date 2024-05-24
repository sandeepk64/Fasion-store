import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const ffStore = configureStore({
    reducer:{
       productReducer:ProductSlice,
       wishlistReducer:wishlistSlice,
       cartReducer:cartSlice
    }
})

export default ffStore