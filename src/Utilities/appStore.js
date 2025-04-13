import cartReducer from "./cartSlice";

const { configureStore, createSlice } = require("@reduxjs/toolkit");


const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    },
})

export default appStore;