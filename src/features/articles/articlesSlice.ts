import { IArticleParams } from "@/types/article.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IArticleParams[] = JSON.parse(
  localStorage.getItem("articles") || "[]"
);

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<IArticleParams>) => {
      state.push(action.payload);
      localStorage.setItem("articles", JSON.stringify(state));
    },
    deleteArticle: (state, action: PayloadAction<IArticleParams["date"]>) => {
      const newArticleList = state.filter((el) => el.date !== action.payload);
      localStorage.setItem("articles", JSON.stringify(newArticleList));
      return newArticleList;
    },
  },
});

export const { addArticle, deleteArticle } = articleSlice.actions;
export default articleSlice;
