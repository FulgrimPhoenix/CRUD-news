import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Article.module.scss";
import { Divider, IconButton, Paragraph, Tag, Title } from "@/ui";
import { IArticleParams } from "@/types/article.types";
import { DeleteIcon, EditIcon } from "@/assets";
import { useAppDispatch } from "@/store/store";
import { deleteArticle } from "@/features/articles/articlesSlice";

interface IArticle
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  articleParams: IArticleParams;
}

const Article: FC<IArticle> = ({ articleParams, ...props }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteArticle(articleParams.date));
  };

  return (
    <article className={cn(styles["article"])} {...props}>
      <Title tag="h2">{articleParams.title}</Title>
      <Paragraph size="md">{articleParams.content}</Paragraph>
      <div className={cn(styles["tag-bar"])}>
        <Tag>{articleParams.author}</Tag>
        <Divider variant="lg" />
        <Tag>{`${articleParams.date}`}</Tag>
        <IconButton style={{ marginLeft: "auto" }} onClick={handleDelete}>
          <DeleteIcon color="var(--red)" />
        </IconButton>
        <IconButton>
          <EditIcon color="var(--black)" />
        </IconButton>
      </div>
    </article>
  );
};

const MemoizedArticle = React.memo(Article);

export default MemoizedArticle;
