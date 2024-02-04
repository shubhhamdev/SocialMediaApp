import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
const appStore = configureStore({
  reducer: {
    item: itemReducer,
  },
});
export default appStore;