import axios from "axios";
import { createContext, useEffect, useEffectEvent, useState } from "react";

export const Store = createContext();

export const ContextProvider = ({ children }) => {
  
  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products",);
      setProductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error==>>>", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Store.Provider value={{ productData, setProductData }}>
      {children}
    </Store.Provider>
  );
};
