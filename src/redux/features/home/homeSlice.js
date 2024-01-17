import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    selectedPost: (state, action) => {
      const newItem = action.payload;

      // Check if the item is already in the state
      const isItemInState = state.some((item) => item.id === newItem.id);

      // If not in state, add the item to the state
      if (!isItemInState) {
        return [...state, newItem];
      }

      // If already in state, you can log a message or handle it accordingly
      console.log("Item is already in the state");
      return state;
    },
    deletePost: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
  },
});

export const { selectedPost, deletePost } = homeSlice.actions;
export default homeSlice.reducer;
