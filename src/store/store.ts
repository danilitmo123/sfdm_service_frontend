import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bloggersAPI } from '../services/BloggerService';

const rootReducer = combineReducers({
  [bloggersAPI.reducerPath]: bloggersAPI.reducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bloggersAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
