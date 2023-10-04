import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
  isLoading: false,
};

export const calcuatorSlice = createSlice({
  name: "calcuator",
  initialState,
  reducers: {
    addRequest: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    addRequestSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = false;
      state.sum = action.payload.sum;
      console.log("Actions inside success: ", action);
      // Attach result in state
    },
    addRequestFailed: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRequest, addRequestSuccess, addRequestFailed } =
  calcuatorSlice.actions;

export default calcuatorSlice.reducer;