import styled from "styled-components";
import { CartProductsCounter } from "../cart-products-counter";

const Header = () => {
  return (
    <Container>
      <h1>Redux Shop</h1>
      <CartProductsCounter />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C313F;
  color: #ffffff;
  padding: 20px 30px;

  a {
      color: #ffffff;
  }
`;

export { Header };
