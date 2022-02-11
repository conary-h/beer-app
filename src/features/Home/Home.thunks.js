import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCatalog = createAsyncThunk(
  'home/getCatalog',
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(
        'https://api.punkapi.com/v2/beers?brewed_before=11-2020&abv_gt=6&per_page=4'
      );

      if (status === 200) return data;
    } catch (error) {
      return rejectWithValue(error?.response || error);
    }
  }
);
