import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        clearCart:(state,action)=>{
            state.item.length=0;
        },
        removeItem:(state,action)=>{
            state.item.splice(action.payload,1);
        }
    }
})

export const{addItem,clearCart,removeItem} = cartSlice.actions; 
export default cartSlice.reducer;
