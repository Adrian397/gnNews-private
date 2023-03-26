import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortByOption = "publishedAt" | "popularity";

export const sortBySlice = createSlice({
  name: "sortBy",
  initialState: {
    option: "publishedAt" as SortByOption,
  },
  reducers: {
    setSortOption: (state, action: PayloadAction<SortByOption>) => {
      state.option = action.payload;
    },
  },
});

export const { setSortOption } = sortBySlice.actions;

export default sortBySlice.reducer;
