import { createSlice } from "@reduxjs/toolkit";
import { ProfileModel } from "shared/models";

export interface ProfileSlice {
  profile: ProfileModel | null;
  isLoading?: boolean;
}

const initialState: ProfileSlice = {
  profile: null,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = {
        ...action.payload,
      };
    },
    setProfileLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProfile, setProfileLoading } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
