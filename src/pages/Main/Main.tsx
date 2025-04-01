import { ArticleForm, ArticleList } from "@/components";
import { Title } from "@/ui";

function App() {
  return (
    <>
      <Title tag="h1" style={{ margin: "20px 0" }}>
        CRUD News
      </Title>
      <ArticleForm />
      <ArticleList />
    </>
  );
}

export default App;
