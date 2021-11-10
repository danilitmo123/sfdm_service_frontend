import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../api/URL';
import { IBlogger } from '../../models/IBlogger';

export const fetchBloggers = createAsyncThunk(
  'bloggers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IBlogger[]>(`${baseURL}/bloggers/`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ooops...Failed to upload bloggers');
    }
  },
);
