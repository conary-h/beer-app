import axios from 'axios';
import { apiURL } from '../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchBeerByName = createAsyncThunk(
  'home/searchBeerByName',
  async (beerName, { rejectWithValue }) => {
    try {
      if (!beerName) {
        return [];
      }
      const { data, status } = await axios.get(
        `${apiURL}/beers?beer_name=${beerName}&per_page=20`
      );

      if (status === 200) return data;
    } catch (error) {
      return rejectWithValue(error?.response || error);
    }
  }
);
