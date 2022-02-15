import { createSlice } from '@reduxjs/toolkit';
import { searchBeerByName } from './Home.thunks';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    status: 'idle',
    error: null,
    searchResults: [],
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(searchBeerByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchBeerByName.fulfilled, (state, { payload }) => {
        state.status = 'done';

        state.searchResults = payload;
      })
      .addCase(searchBeerByName.rejected, (state) => {
        state.status = 'rejected';
      }),
});

export default homeSlice.reducer;
