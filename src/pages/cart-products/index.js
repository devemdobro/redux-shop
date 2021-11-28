import { useSelector } from "react-redux";
import { Products } from "../../components/products";

const CartProducts = () => {
  const cartProducts = useSelector((state) => state.cartProducts);

  return (
    <>
      <h1>Cart Products</h1>
      <Products products={cartProducts} />
    </>
  );
};

export { CartProducts };
