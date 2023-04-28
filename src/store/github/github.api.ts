import { ServerResponce, IUser, IRepo } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'guthub/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    // searchUsers: build.query<ServerResponce<IUser>, string>({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: { q: search, per_page: 10 },
      }),
      transformResponse: (responce: ServerResponce<IUser>) => responce.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
    // Создание пользователя POST
    createUser: build.mutation<any, void>({
      query: () => '',
    }),
  }),
});

export const {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
  useCreateUserMutation,
} = githubApi;
