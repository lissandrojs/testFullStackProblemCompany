import axios from "axios";
import React from "react";



const useAPIConsumption = () => {
  const getProducts = async () => {
    const response = await axios.get("http://localhost:8081/products");
    if (response.data) {
      return response.data;
    }
    return [];
  };

  return { getProducts };
};

export default useAPIConsumption;