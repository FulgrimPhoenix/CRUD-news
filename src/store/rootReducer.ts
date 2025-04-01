import articleSlice from "@/features/articles/articlesSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [articleSlice.name]: articleSlice.reducer,
});

export default rootReducer;
