// 基础模块
import { createSlice } from '@reduxjs/toolkit';

// 类型
import type { Slice, PayloadAction } from '@reduxjs/toolkit';

type LoadingState = Record<string, boolean>;

const initialState: LoadingState = {};

const loadingSlice: Slice = createSlice({
  name: 'appsLoading',
  initialState,
  reducers: {
    setAppLoading: (state: LoadingState, action: PayloadAction<{ appName: string; loading: boolean }>) => {
      state[action.payload.appName] = action.payload.loading;
    },
    clearAllLoading: () => {
      return {};
    },
  },
});

export const { setAppLoading, clearAllLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
