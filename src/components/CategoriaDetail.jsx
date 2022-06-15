import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "./Banner";
import Categorias from './Categoria';
import CatDisplay from "./CategoriaDisplay";

function CategoriaDetail({ sumarCarrito }) {
  const onAdd = (count) => {
    Swal.fire({
      title: `Agregaste ${count} item al carrito`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const { genero } = useParams(); // genero de la url
  const [productos, setProductos] = useState([]); // estado inicial

  const filtro = (body) => {
    return body.filter((producto) => producto.genero.toLowerCase() === genero.toLowerCase()); // Filtro por el genero
  };

  useEffect(() => {
    fetch("../../juegos.json")
      .then((resp) => resp.json()) // convierte el json a un objeto
      .then((body) => setProductos(filtro(body))) 
      .catch((err) => console.log(err)); // si hay error, lo muestro en consola
  }, [genero]);

  if (productos.length > 0) {
    
    return (
      <>
        <Banner />        
        <Categorias />
        {productos.map((producto) => (
          <CatDisplay id={producto.id} nombre={producto.title} genero={producto.genero} imagen={producto.img} key={producto.id} detail={producto.detail} inicial={1} max={producto.stock} onAdd={onAdd} agregarCantidad={sumarCarrito}/>
        ))}
      </>
    );
  }
}

export default CategoriaDetail;
