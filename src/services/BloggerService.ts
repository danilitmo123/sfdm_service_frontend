import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from '../api/URL';

export const bloggersAPI = createApi({
  reducerPath: 'bloggersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchAllBloggers: build.query({
      query: () => ({
        url: '/bloggers/',
      }),
    }),
  }),
});
