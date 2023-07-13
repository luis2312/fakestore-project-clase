import React from "react";
import { useCartContext } from "../provider/CartProvider";

const ProductosDetalle = () => {
  const {
    state: { item_id },
  } = useCartContext();
  const { dispatch } = useCartContext();

  return (
    <div className="detalles">
      <div className="flex flex-col gap-4">
        <div
          key={item_id.id}
          className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4"
        >
          <img
            src={item_id.image}
            alt={item_id.title}
            className="h-28 object-cover self-center"
          />
          <h2 className="font-bold">{item_id.title}</h2>
          <span>${item_id.price}</span>
          <div className="description">
            <br />
            <p>
              <b>Descripcion: </b> {item_id.description}
            </p>
            <br />
            <p>
              <b>Categoria:</b> {item_id.category}
            </p>
          </div>
        </div>
        <button
        className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: item_id });
          alert("Producto añadido al carrito");
        }}
      >
        Añadir al carrito
      </button>
      </div>
      
    </div>
  );
};

export default ProductosDetalle;
