import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile } from '../models/models';



export const salarySlice = createSlice({
  name: 'salary',
  initialState: [],
  reducers: {
    addFile: (state:IFile[], action:PayloadAction<IFile[]>) =>
      void state.splice(0, 12, ...action.payload),
  },
});

export const { addFile } = salarySlice.actions;
export default salarySlice.reducer;
