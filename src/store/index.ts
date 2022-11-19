import { configureStore } from '@reduxjs/toolkit';
import { monthSlice } from './remainderMonthsSlice';
import { salarySlice } from './salarySlice';

const store = configureStore({
  reducer: {
      month: monthSlice.reducer,
      salary: salarySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;