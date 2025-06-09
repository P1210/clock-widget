import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedAvatar: null,
  selectedBackground: null,
  selectedAvatarAnimations: null,
  selectedBackgroundAnimations: null,
};

export const appSlice = createSlice({
  initialState: initialState,
  name: "app",
  reducers: {
    setAvatar: (state, action) => {
      state.selectedAvatar = action.payload;
    },
  },
});

export const { setAvatar } = appSlice.actions;
export default appSlice.reducer;
