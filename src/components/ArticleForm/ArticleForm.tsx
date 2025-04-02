import { Button, Paragraph, TextField } from "@/ui";
import styles from "./ArticleForm.module.scss";
import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { IArticleParams } from "@/types/article.types";
import { useAppDispatch } from "@/store/store";
import { addArticle, editArticle } from "@/features/articles/articlesSlice";

interface IArticleForm
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialValues?: IArticleParams;
  onClose?: () => void;
}

const ArticleForm: FC<IArticleForm> = ({
  initialValues,
  onClose,
  ...props
}) => {
  const [values, setValues] = useState<IArticleParams>({
    title: initialValues?.title || "",
    content: initialValues?.content || "",
    author: initialValues?.author || "",
    date: initialValues?.date || new Date(),
  });
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddArticle = () => {
    if (values.author && values.content && values.title) {
      if (initialValues) {
        dispatch(editArticle(values));
        onClose?.();
      } else {
        dispatch(addArticle(values));
      }
      setValues({
        title: "",
        content: "",
        author: "",
        date: new Date(),
      });

      setError("");
    } else {
      setError("Все поля должны быть заполнены");
    }
  };

  return (
    <section className={cn(styles["article-form"])} {...props}>
      <TextField
        value={values.title}
        variant="text"
        placeholder="Заголовок"
        name="title"
        onChange={handleChange}
      />
      <TextField
        value={values.author}
        variant="text"
        placeholder="Имя"
        name="author"
        onChange={handleChange}
      />
      <TextField
        value={values.content}
        variant="textarea"
        placeholder="Текст статьи"
        name="content"
        onChange={handleChange}
      />
      {error && (
        <Paragraph
          size="sm"
          style={{ textAlign: "center", color: "red", marginBottom: "10px" }}
        >
          {error}
        </Paragraph>
      )}
      <Button onClick={handleAddArticle}>
        {initialValues ? "Сохранить" : "Добавить"}
      </Button>
    </section>
  );
};

export default ArticleForm;
