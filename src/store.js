import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
  reducer:{
    states: customReducer
  }
});

export default store;