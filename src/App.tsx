import { Provider } from "react-redux";
import { store } from "@/store/store";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/routes/AppRoutes";
import cn from "classnames";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={cn(styles.root)}>
          <AppRoutes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
