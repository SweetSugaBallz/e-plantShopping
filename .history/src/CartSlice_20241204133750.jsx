import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems: 0
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      console.log(totalItems);
      if (existingItem) {
        existingItem.quantity++;

        console.log(totalItems);
      } else {
        state.items.push({ name, image, cost, quantity: 1 });

        console.log(totalItems);
      }
      state.totalItems++;
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      const itemToRemove = state.items.find(item => item.name === name);

      console.log(totalItems);

      if (itemToRemove) {
        state.totalItems -= itemToRemove.quantity;
        state.items = state.items.filter(item => item.name !== name);

        console.log(totalItems);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      console.log(totalItems);
      if (itemToUpdate) {
        state.totalItems += (quantity - itemToUpdate.quantity);
        itemToUpdate.quantity = quantity;

        console.log(totalItems);
      }
    },
  },
});

export const selectTotalItems = state => state.cart.totalItems;

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
