import { ArticleForm, ArticleList } from "@/components";
import { Title } from "@/ui";
import cn from "classnames";
import styles from "./Main.module.scss";

function App() {
  return (
    <div className={cn(styles.main)}>
      <Title tag="h1" style={{ margin: "20px 0" }}>
        CRUD News
      </Title>
      <ArticleForm />
      <ArticleList />
    </div>
  );
}

export default App;
