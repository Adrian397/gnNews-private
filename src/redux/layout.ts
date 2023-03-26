import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LayoutOption = "list" | "tiles";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    option: "list" as LayoutOption,
  },
  reducers: {
    setLayoutOption: (state, action: PayloadAction<LayoutOption>) => {
      state.option = action.payload;
    },
  },
});

export const { setLayoutOption } = layoutSlice.actions;

export default layoutSlice.reducer;
