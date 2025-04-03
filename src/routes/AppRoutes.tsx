import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Main = lazy(() => import("@/pages/Main/Main"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
