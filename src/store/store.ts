import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppSelector: <TSelected>(
  selector: (state: TAppState) => TSelected
) => TSelected = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
