import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from "react-redux";
import styled from "styled-components";
import { addProductToCart } from "../../store/actions/cart";

export const CartProductsCounter = () => {
  const { payload } = useSelector(addProductToCart);
  return (
    <Container>
      <a href="#">
        <FontAwesomeIcon icon={faCartPlus} />
        <span>{payload.cartProducts.length}</span>
      </a>
    </Container>
  );
};

const Container = styled.div`
    a {
        position: relative;
    }

    span {
        display: inline-block;
        text-align: center;
        line-height: 12px;
        width: 12px;
        height: 12px;
        background-color: red;
        color: #ffffff;
        border-radius: 50%;
        font-size: 10px;

        position: absolute;
        top: -7px;
        right: -6px;
    }
` 
