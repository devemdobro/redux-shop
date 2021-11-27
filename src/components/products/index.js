import { useState } from "react";
import { Product } from "../product";
import productsJson from "../../json/products.json";
import { CartProductsCounter } from "../cart-products-counter";
import styled from "styled-components";

const Products = () => {
  const [products] = useState(productsJson.data);

  return (
    <Section>
      <ul>
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} />
        ))}
      </ul>

      {/* <CartProductsCounter /> */}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  
  background-color: #1E1D2B;
  color: #ffffff;
  padding: 20px 30px;
  min-height: calc(100vh - 77px);
  box-sizing: border-box;

  a {
    color: #ffffff;
  }

  ul {
    list-style-type: none;
    flex-grow: 1;
  }
`;

export { Products };
