import { Product } from "../product";
import { CartProductsCounter } from "../cart-products-counter";

const Products = ({ products }) => {
  return (
    <>
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
    </>
  );
};

export { Products };
