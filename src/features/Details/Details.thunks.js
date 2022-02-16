import axios from 'axios';
import { apiURL } from '../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getBeerDetails = createAsyncThunk(
  'details/getBeerDetails',
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await axios.get(`${apiURL}/beers/${id}`);

      if (status === 200) return data;
    } catch (error) {
      return rejectWithValue(error?.response || error);
    }
  }
);
