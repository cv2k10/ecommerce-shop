import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const fetchedProducts = await response.json();
      setProducts(fetchedProducts);
      // console.log(fetchedProducts);
    }

    fetchProducts();
  }, []);

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
