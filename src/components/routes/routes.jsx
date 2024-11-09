import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import About from "../page/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
    ],
  },
]);
export default router;
