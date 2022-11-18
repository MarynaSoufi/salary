import { configureStore } from '@reduxjs/toolkit';
import { monthSlice } from './remainderMonthsSlice';

const store = configureStore({
  reducer: {
      month: monthSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;