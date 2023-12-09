import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Products from "./Products";
import Food from "./Food";
import Machines from "./Machines";
import HotDrinks from "./HotDrinks";
import ColdDrinks from "./ColdDrinks";
import Snacks from "./Snacks";
import Cart from "./CartCheckout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/food",
          element: <Food />,
        },
        {
          path: "products/food/hotdrinks",
          element: <HotDrinks />,
        },
        {
          path: "products/food/colddrinks",
          element: <ColdDrinks />,
        },
        {
          path: "products/food/snacks",
          element: <Snacks />,
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
