import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [], // State to hold cart items
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload; // { id, name, price, quantity }
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity; // Update quantity if item exists
            } else {
                state.cartItems.push({ ...item, quantity: 1 }); // Add new item to cart
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload; // { id, quantity }
            const existingItem = state.cartItems.find(cartItem => cartItem.id === id);

            if (existingItem) {
                existingItem.quantity = quantity; // Update the item's quantity
            }
        },
        removeItem: (state, action) => {
            const id = action.payload; // Item ID
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== id);
        },
    },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

