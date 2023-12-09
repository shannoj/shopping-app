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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (id: number) => {
    var result = data.find((obj) => {
      return obj.id === id;
    });
    setShoppingCart([...shoppingCart, result]);
    console.log(shoppingCart);
  };

  console.log(error);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "cart",
          element: <Cart data={shoppingCart} />,
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
              addButtonClick={addToCart}
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
