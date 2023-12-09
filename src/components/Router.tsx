import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Products from "./Products";
import Food from "./Food";
import Machines from "./Machines";
import HotDrinks from "./HotDrinks";
import ColdDrinks from "./ColdDrinks";
import Snacks from "./Snacks";
import Cart from "./CartCheckout";
import { useEffect, useState } from "react";

const Router = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  /* const addToCart = (id: number) => {
    var result = data.find((obj) => {
      return obj.id === id;
    });
    setShoppingCart([...shoppingCart, result]);
    console.log(shoppingCart);
  }; */
  console.log(error);
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
          element: (
            <Snacks
              data={data}
              error={error}
              loading={loading}
              //addButtonClick={addToCart}
            />
          ),
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
