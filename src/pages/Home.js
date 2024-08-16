import React, {useContext, useState, useEffect} from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = useContext(ProductContext);
  // console.log(products)

  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing"))
  }, [products])

  useEffect(() => {
    console.log(filteredProducts)
  }, [filteredProducts])

  return (
  <div>
      <section className="py-16">
        <div className="container max-auto">
          {filteredProducts.map((product, i) => (
            <div key={i} className=''>{product.title}</div>
          ))}
        </div>
    </section>
  </div>);
};

export default Home;