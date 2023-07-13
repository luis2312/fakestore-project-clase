import { useEffect, useState } from "react";
import { useRef } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();
  const iRef = useRef();
  const buscar = () => {
    //https://keepcoding.io/blog/crear-un-filtro-de-busqueda-en-react/
    setBusqueda([...products]);
    //alert(iRef.current.value);
    if (iRef.current.value.toUpperCase() === "")
    {
      //alert(iRef.current.value);
      //setBusqueda([...products]);
    }
    else
    {
      setBusqueda(
        busqueda.filter ((product) => {
          if (product.title.toUpperCase().includes (iRef.current.value.toUpperCase())) {
          return true;
          }
          return false;
          })
        );
    }
    
  };

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setBusqueda(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <h1>FakeStore</h1>
      <div className="flex gap-4">
        <input
          type="text" ref={iRef} placeholder="Buscar"
          onChange={({ target }) => {
            //setInputValue(target.value);
            //<!--<button onClick={buscar}>Buscar</button>-->
            buscar();
          }}
        />
        
      </div>
      {loading && <p>Cargando...</p>}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {
          busqueda.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
