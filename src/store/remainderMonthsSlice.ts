import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMonth } from '../models/models';


export const monthSlice = createSlice({
  name: 'month',
  initialState: [],
  reducers: {
    addMonth: (state: IMonth[], action:PayloadAction<IMonth[]>) => void state.splice(0, 12, ...action.payload),
  },
});

export const { addMonth } = monthSlice.actions;
export default monthSlice.reducer;