import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: []
    },
    reducers:{
        addItems: (store, action) =>{
            store.items.push(action.payload);

        },
        removeItem: (store, action) =>{
            store.items.pop();

        },
        clearCart: (store, action) =>{
            store.items.length = 0;
            
        }
    }
});




export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;