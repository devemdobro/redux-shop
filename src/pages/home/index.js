import { useState } from "react";
import { Products } from "../../components/products";
import productsJson from "../../json/products.json";

const Home = () => {
  const [products] = useState(productsJson.data);
  console.log('Home', products)

  return (
    <>
      <h1> Home </h1>
      <Products products={products}/>
    </>
  );
};

export { Home };
