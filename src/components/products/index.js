import { Product } from "../product";
import { CartProductsCounter } from "../cart-products-counter";
import styled from "styled-components";

const Products = ({ products }) => {
  return (
    <Section>
      <ul>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product key={index} name={product.name} price={product.price} />
          ))
        ) : (
          <li>Nenhum produto encontrado</li>
        )}
      </ul>

      {/* <CartProductsCounter /> */}
    </Section>
  );
};

const Section = styled.section`
  display: flex;

  background-color: #1e1d2b;
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
