import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../components/Cart/index.tsx';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
  const data = await response.json();
  return data.flatMap((restaurant: { cardapio: Product[] }) => restaurant.cardapio);
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao buscar produtos';
      });
  },
});

export default productsSlice.reducer;