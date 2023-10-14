import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./rtk/ProductSlice";
import CartSlice from "./rtk/CartSlice";




export const Store =configureStore({
    reducer:{
        Productt:ProductSlice,
        cart:CartSlice,

    },
})