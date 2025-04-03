import { ArticleForm, ArticleList } from "@/components";
import { Title } from "@/ui";
import cn from "classnames";
import styles from "./Main.module.scss";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

const Main: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ ...props }) => {
  return (
    <div className={cn(styles.main)} {...props}>
      <Title tag="h1" style={{ margin: "20px 0" }}>
        CRUD News
      </Title>
      <ArticleForm />
      <ArticleList />
    </div>
  );
};

export default Main;
