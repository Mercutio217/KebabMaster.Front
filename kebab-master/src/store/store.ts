import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basketSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: basketSlice.reducer
  });
  
export const useAppDispatch: (action: any) => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;