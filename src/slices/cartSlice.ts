import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../components/Cart/index.tsx';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantidade += 1;
      } else {
        state.items.push({ ...action.payload, quantidade: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        if (state.items[index].quantidade > 1) {
          state.items[index].quantidade -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;