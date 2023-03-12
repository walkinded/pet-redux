import { gihubApi } from './github/github.api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { [gihubApi.reducerPath]: gihubApi.reducer },
});
