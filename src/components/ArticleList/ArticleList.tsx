import React from "react";
import { Article } from "@/components";
import styles from "./ArticleList.module.scss";
import cn from "classnames";
import { Title } from "@/ui";
import { useAppSelector } from "@/store/store";

const ArticleList = () => {
  const data = useAppSelector((state) => state.articles);

  return (
    <>
      <Title tag="h2">Список новостей</Title>
      <ul className={cn(styles["article-list"])}>
        {data.map((el) => (
          <Article articleParams={el} key={`${el.date}`} />
        ))}
      </ul>
    </>
  );
};

const MemoizedArticleList = React.memo(ArticleList);

export default MemoizedArticleList;
