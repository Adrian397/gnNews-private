import { createSlice } from "@reduxjs/toolkit";

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleIsOpen, setIsClose } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
