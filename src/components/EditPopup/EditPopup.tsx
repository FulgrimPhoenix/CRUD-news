import styles from "./EditPopup.module.scss";
import cn from "classnames";
import ArticleForm from "../ArticleForm/ArticleForm";
import { Button, Title } from "@/ui";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { IArticleParams } from "@/types/article.types";

interface IEditPopup
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentArticle: IArticleParams;
  onClose: () => void;
}

const EditPopup: FC<IEditPopup> = ({ currentArticle, onClose, ...props }) => {
  return (
    <section className={cn(styles["popup"])} {...props}>
      <Title tag="h3">Редактировать новость</Title>
      <ArticleForm initialValues={currentArticle} onClose={onClose} />
      <Button ghost={true} onClick={onClose}>
        Закрыть
      </Button>
    </section>
  );
};

export default EditPopup;
