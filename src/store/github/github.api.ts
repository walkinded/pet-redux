import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gihubApi = createApi({
  reducerPath: 'guthub/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    searchUsers: build.query<any, string>({
      query: (search: string) => ({
        url: 'search/users',
        params: { q: search },
      }),
    }),
  }),
});

export const { useSearchUsersQuery } = gihubApi;
