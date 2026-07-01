// 基础模块
import { configureStore } from '@reduxjs/toolkit';

// 类型
import type { EnhancedStore } from '@reduxjs/toolkit';

// Reducer
import appsLoadingReducer from './slices/appsLoadingSlice';

export const store: EnhancedStore = configureStore({
  reducer: {
    appsLoading: appsLoadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
