import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import App from "../App";
import Products from "./Products";
import Food from "./Food";
import Machines from "./Machines";
import HotDrinks from "./HotDrinks";
import ColdDrinks from "./ColdDrinks";
import Snacks from "./Snacks";
import Cart from "./CartCheckout";
import { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { count } from "console";

const Router = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);
  var [cartTotal, setCartTotal] = useState(0);

  const isEmpty = () => {
    if (shoppingCart.length == 0) {
      return true;
    } else {
      return false;
    }
  };

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
        console.log(json);
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
    result.quantity = 1;
    setShoppingCart([...shoppingCart, result]);
    setCartTotal((prevTotal) => prevTotal + result.price);
  };

  const addOne = (id: number) => {
    setShoppingCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      // Calculate the updated total based on the changed quantity
      const updatedTotal = updatedCart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      setCartTotal(updatedTotal);
      return updatedCart;
    });
  };

  const removeOne = (id: number) => {
    setShoppingCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity != 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      // Calculate the updated total based on the changed quantity
      const updatedTotal = updatedCart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      setCartTotal(updatedTotal);

      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    // Use filter to create a new array without the item with the specified id
    const updatedCart = shoppingCart.filter((obj) => obj.id !== id);

    // Calculate the updated total based on the changed quantity
    const updatedTotal = updatedCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setCartTotal(updatedTotal);

    // Set the new array as the shoppingCart state
    setShoppingCart(updatedCart);
  };

  console.log(error);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          children={
            <Link to="cart">
              <FloatButton
                shape="circle"
                type="primary"
                style={{ right: 100 }}
                icon={<ShoppingCartOutlined />}
                badge={{ count: shoppingCart.length }}
              ></FloatButton>
            </Link>
          }
        ></App>
      ),
      children: [
        {
          path: "cart",
          element: (
            <Cart
              addOne={addOne}
              removeOne={removeOne}
              data={shoppingCart}
              removeButtonClick={removeFromCart}
              empty={isEmpty}
              total={cartTotal}
            />
          ),
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
