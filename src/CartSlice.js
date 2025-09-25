import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const incoming = action.payload;
            const qtyToAdd = incoming.qty ?? 1;

            const existing = state.item.find((item) => item.id === incoming.id )
            if(existing){
                existing.qty += qtyToAdd
            } else {
                state.item.push({...incoming, qty: qtyToAdd})
            }
        },

        removeCart: (state, action) => {
            const id =  action.payload
            state.item = state.item.filter((item) => item.id !== id)
        },

        increment: (state, action) => {
            const id = action.payload
            const item = state.item.find((item) => item.id === id)
            if(item){
                item.qty += 1
            }
        },

        decrement: (state, action) => {
            const id = action.payload
            const item = state.item.find((item) => item.id === id)
            if(item){
                item.qty -= 1
                if (item.qty <= 0) {
                    state.item = state.item.filter((item) => item.id !== id);
                }
            }
        },

        clearcart: (state) => {
            state.item = []
        }
    }
})


export const { addToCart, removeCart, clearcart, increment, decrement } = CartSlice.actions

export default CartSlice.reducer