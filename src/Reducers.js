import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  balance: 1000,
  count: 20,
};

export const customReducer = createReducer(initialState, {
  diposit: (state, action) => {
    state.balance += action.payload;
  },
  withdraw: (state, action) => {
    state.balance -= action.payload;
  },
  increase: (state, action) => {
    state.count += action.payload;
  },
  decrease: (state, action) => {
    state.count -= action.payload;
  }
});