import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basketSlice";
import userDataSlice from "./slices/userDataslice";
import { commonSlice } from "./slices/commonSlice";

const store = configureStore({
    reducer: combineReducers(
      {
        basket: basketSlice.reducer, 
        userData: userDataSlice.reducer,
        common: commonSlice.reducer
      })
  });
    
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;