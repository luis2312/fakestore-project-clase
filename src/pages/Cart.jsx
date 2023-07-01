import { useCartContext } from "../provider/CartProvider";

const Cart = () => {
  const {
    state: { cart },
  } = useCartContext();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cart;
