import { createSlice } from '@reduxjs/toolkit';
import { getBeerDetails } from './Details.thunks';

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    status: 'idle',
    error: null,
    details: {},
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getBeerDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBeerDetails.fulfilled, (state, { payload }) => {
        state.status = 'done';

        state.details = payload;
      })
      .addCase(getBeerDetails.rejected, (state) => {
        state.status = 'rejected';
      }),
});

export default detailsSlice.reducer;
