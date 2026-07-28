import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Store = createContext();

export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  // =================================================================
  //  localstorage concept of cart
  // =================================================================
  const savedCart = JSON.parse(localStorage.getItem("Cart")) || [];
  const [cart, setCart] = useState(savedCart);
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);
  // =================================================================
  // =================================================================

  // api call for the product from the fake store
  // call the api one time only using useEffect(()=>{},[])with dependency.
  const getProductData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log("error==>>>", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  // =================================================================
  // =================================================================

  // All cart feature using ADD, DELETE, INCREASE, DESCREASE,
  const AddCart = (product) => {
    const exist = cart.find((element) => element.id === product.id);
    if (exist) {
      setCart(
        cart.map((element) =>
          element.id === product.id
            ? { ...element, quantity: element.quantity + 1 }
            : element,
        ),
      );
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
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const totalPrice = () => {
    return cart.reduce((acc, val) => acc + val.price * val.quantity, 0);
  };

  const Checkout = () => {
    setCart([]);
    localStorage.removeItem("Cart");
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
        totalPrice,
        Checkout,
      }}
    >
      {children}
    </Store.Provider>
  );
};
