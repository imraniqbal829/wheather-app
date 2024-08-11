import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
