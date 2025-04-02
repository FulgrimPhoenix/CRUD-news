import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Article.module.scss";
import { Divider, IconButton, Paragraph, Tag, Title } from "@/ui";
import { IArticleParams } from "@/types/article.types";
import { DeleteIcon, EditIcon } from "@/assets";
import { useAppDispatch } from "@/store/store";
import { deleteArticle } from "@/features/articles/articlesSlice";
import useModalContext from "@/hooks/usePopup";
import { EditPopup } from "@/components";

interface IArticle
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  articleParams: IArticleParams;
}

const Article: FC<IArticle> = ({ articleParams, ...props }) => {
  const dispatch = useAppDispatch();
  const { open } = useModalContext();
  const convertedTime = new Date(articleParams.date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDelete = () => {
    dispatch(deleteArticle(articleParams.date));
  };

  const handleOpenPopup = () => {
    open(({ close }) => (
      <EditPopup currentArticle={articleParams} onClose={close} />
    ));
  };

  return (
    <article className={cn(styles["article"])} {...props}>
      <Title tag="h2">{articleParams.title}</Title>
      <Paragraph size="md">{articleParams.content}</Paragraph>
      <div className={cn(styles["tag-bar"])}>
        <Tag>{articleParams.author}</Tag>
        <Divider variant="lg" />
        <Tag>{convertedTime}</Tag>
        <IconButton style={{ marginLeft: "auto" }} onClick={handleDelete}>
          <DeleteIcon color="var(--red)" />
        </IconButton>
        <IconButton onClick={handleOpenPopup}>
          <EditIcon color="var(--black)" />
        </IconButton>
      </div>
    </article>
  );
};

const MemoizedArticle = React.memo(Article);

export default MemoizedArticle;
