import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchBeerByName = createAsyncThunk(
  'home/searchBeerByName',
  async (beerName, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(
        `https://api.punkapi.com/v2/beers?beer_name=${beerName}&per_page=10`
      );

      if (status === 200) return data;
    } catch (error) {
      return rejectWithValue(error?.response || error);
    }
  }
);
