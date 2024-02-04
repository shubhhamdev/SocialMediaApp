import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    pageIndictor: true,
    itemList: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.itemList = action.payload;
    },
    changePage: (state, action) => {
      state.pageIndictor = action.payload;
    },
  },
});
export const { addItem, changePage } = itemSlice.actions;
export default itemSlice.reducer;
