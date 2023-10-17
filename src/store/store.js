import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/index";

// redux store setup
const store = configureStore({
  reducer: rootReducer,
});

export default store;
