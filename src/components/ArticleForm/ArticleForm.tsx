import { Button, Paragraph, TextField } from "@/ui";
import styles from "./ArticleForm.module.scss";
import cn from "classnames";
import { useState } from "react";
import { IArticleParams } from "@/types/article.types";
import { useAppDispatch } from "@/store/store";
import { addArticle } from "@/features/articles/articlesSlice";

const ArticleForm = () => {
  const [values, setValues] = useState<IArticleParams>({
    title: "",
    content: "",
    author: "",
    date: new Date(),
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
      dispatch(addArticle(values));
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
    <section className={cn(styles["article-form"])}>
      <TextField
        variant="text"
        placeholder="Заголовок"
        name="title"
        onChange={handleChange}
      />
      <TextField
        variant="text"
        placeholder="Имя"
        name="author"
        onChange={handleChange}
      />
      <TextField
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
      <Button onClick={handleAddArticle}>Добавить</Button>
    </section>
  );
};

export default ArticleForm;
