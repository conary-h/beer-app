import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSuggestedCatalog = createAsyncThunk(
  'home/getSuggestedCatalog',
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(
        'https://api.punkapi.com/v2/beers?malt=extra_pale&per_page=4'
      );

      if (status === 200) return data;
    } catch (error) {
      return rejectWithValue(error?.response || error);
    }
  }
);
