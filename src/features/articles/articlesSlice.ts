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
    editArticle: (state, action: PayloadAction<IArticleParams>) => {
      const targetArticleIndex = state.findIndex(
        (el) => el.date === action.payload.date
      );
      if (targetArticleIndex !== -1) {
        state[targetArticleIndex] = action.payload;
        localStorage.setItem("articles", JSON.stringify(state));
      }
    },
  },
});

export const { addArticle, deleteArticle, editArticle } = articleSlice.actions;
export default articleSlice;
