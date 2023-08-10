import { createSlice } from "@reduxjs/toolkit";

//users slice

const initialState = {
  user: {
    email: null,
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
