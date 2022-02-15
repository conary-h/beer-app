import { createSlice } from '@reduxjs/toolkit';
import { searchBeerByName } from './Home.thunks';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    status: 'idle',
    error: null,
    searchResults: [],
  },
  reducers: {
    clearResults: (state) => {
      state.searchResults = [];
    },
  },
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

export const { clearResults } = homeSlice.actions;

export default homeSlice.reducer;
