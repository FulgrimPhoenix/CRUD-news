import { IArticleParams } from "@/types/article.types";

export const setArticleToLocalStorage = (value: IArticleParams[]) => {
  localStorage.setItem("articles", JSON.stringify(value));
};

export const getArticlesFromLocalStorage = (): IArticleParams[] => {
  return JSON.parse(localStorage.getItem("articles") || "[]");
};
