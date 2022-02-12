import { createSlice } from '@reduxjs/toolkit';
import { getSuggestedCatalog } from './Home.thunks';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    status: 'idle',
    error: null,
    suggestedItems: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getSuggestedCatalog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSuggestedCatalog.fulfilled, (state, { payload }) => {
        state.status = 'done';

        console.log('payload', payload);

        state.suggestedItems = payload;
      })
      .addCase(getSuggestedCatalog.rejected, (state) => {
        state.status = 'rejected';
      }),
});

export default homeSlice.reducer;
