import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Language = "en" | "pl";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLanguage: "en" as Language,
  },
  reducers: {
    setCurrentLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setCurrentLanguage } = languageSlice.actions;

export default languageSlice.reducer;
