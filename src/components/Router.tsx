import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Products from "./Products";
import Food from "./Food";
import Machines from "./Machines";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/food",
          element: <Food />,
        },
        {
          path: "products/machines",
          element: <Machines />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
