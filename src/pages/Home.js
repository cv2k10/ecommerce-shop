import React, {useContext, useState, useEffect} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product, i) => (
              <div key={i} className=''>{
                <Product product={product} key={product.key} />
              }</div>
            ))}            
          </div>

        </div>
    </section>
  </div>);
};

export default Home;