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

//   const getBook = async (slug, chapter) => {
//     const response = await axios.get(
//       `/api/books?slug=${slug}&chapter=${chapter}`
//     );

//     if (response.data) {
//       return response.data;
//     }
//     return null;
//   };

//   const postSearch = async (search) => {
//     const response = await axios.get(`/api/search?q=${search}`);

//     if (response.data) {
//       return response.data;
//     }
//     return [];
//   };
// getBook, postSearch
  return { getProducts,  };
};

export default useAPIConsumption;