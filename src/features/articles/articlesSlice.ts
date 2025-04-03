import {
  getArticlesFromLocalStorage,
  setArticleToLocalStorage,
} from "@/helpers/localstorageActions";
import { IArticleParams } from "@/types/article.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IArticleParams[] = getArticlesFromLocalStorage();

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<IArticleParams>) => {
      state.push(action.payload);
      setArticleToLocalStorage(state);
    },
    deleteArticle: (state, action: PayloadAction<IArticleParams["date"]>) => {
      const newArticleList = state.filter((el) => el.date !== action.payload);
      setArticleToLocalStorage(newArticleList);
      return newArticleList;
    },
    editArticle: (state, action: PayloadAction<IArticleParams>) => {
      const targetArticleIndex = state.findIndex(
        (el) => el.date === action.payload.date
      );
      if (targetArticleIndex !== -1) {
        state[targetArticleIndex] = action.payload;
        setArticleToLocalStorage(state);
      }
    },
  },
});

export const { addArticle, deleteArticle, editArticle } = articleSlice.actions;
export default articleSlice;
