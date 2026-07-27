import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Store = createContext();

export const ContextProvider = ({ children }) => {
  
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  // api call for the product from the fake store
  const getProductData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log("error==>>>", error);
    }
  };
  // call the api one time only using useEffect(()=>{},[])with dependency.
  useEffect(() => {
    getProductData();
  }, []);

  // All cart feature using ADD, DELETE, INCREASE, DESCREASE,
  const AddCart = (product) => {
    const exist = cart.find(function (element) {
      return element.id === product.id;
    });
    if (exist) {
      cart.map(function (element, idx) {
        element.id === product.id
          ? { ...element, quantity: element.quantity + 1 }
          : element;
      });
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const DecreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const RemoveProduct = (id) => {
    setCart(
      cart.filter((element, idx) => {
        return element.id !== id;
      }),
    );
  };

  const totalPrice = () => {
    return cart.reduce((acc, val) => acc + val.price * val.quantity, 0);
  };
  return (
    <Store.Provider
      value={{
        productData,
        setProductData,
        cart,
        setCart,
        AddCart,
        increaseQuantity,
        DecreaseQuantity,
        RemoveProduct,
        totalPrice
      }}
    >
      {children}
    </Store.Provider>
  );
};
