import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/componnets/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
export default router;
