import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlogger } from '../../models/IBlogger';
import { fetchBloggers } from './ActionCreators';

interface BloggerState {
  bloggers: IBlogger[]
  isLoading: boolean,
  error: string
}

const initialState: BloggerState = {
  bloggers: [],
  isLoading: false,
  error: '',
};

export const bloggerSlice = createSlice({
  name: 'bloggers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBloggers.fulfilled.type]: (state, action: PayloadAction<IBlogger[]>) => {
      state.isLoading = false;
      state.error = '';
      state.bloggers = action.payload;
    },
    [fetchBloggers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBloggers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bloggerSlice.reducer;
