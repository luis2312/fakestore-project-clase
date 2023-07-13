import { useCartContext } from "../provider/CartProvider";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  const test = () => {
    dispatch({ type: "item_id", payload: product });
    //alert("click");
  };

  return (
    <div key={product.id} className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center"
      />
      <h2 className="font-bold">{product.title}</h2>
      <span>${product.price}</span>
      <button
        className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: product });
          alert("Producto añadido al carrito");
        }}
      >
        Añadir al carrito
      </button>
      <div>
        <Link to={`/producto/${product.id}`} onClick={test}>Detalle</Link>
      </div>
      
    </div>
  );
};

export default ProductItem;
