import { createSlice } from '@reduxjs/toolkit';
import { getCatalog } from './Home.thunks';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    status: 'idle',
    error: null,
    cards: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCatalog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCatalog.fulfilled, (state, { payload }) => {
        state.status = 'done';

        state.cards = payload;
      })
      .addCase(getCatalog.rejected, (state) => {
        state.status = 'rejected';
      }),
});

export default homeSlice.reducer;
