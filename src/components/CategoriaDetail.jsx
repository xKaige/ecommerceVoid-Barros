import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Categorias from './Categoria';
import CatDisplay from "./CategoriaDisplay";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

function CategoriaDetail({ sumarCarrito }) {
  
  const { genero } = useParams(); // genero de la url  
  const [ productos, setProductos ] = useState([]); // estado inicial
  
  useEffect(() => { 

    const db = getFirestore(); // obtenemos la base de datos
    const productsCollection = collection(db, 'Item'); // obtenemos la colección

    if (genero) {  
      const q = query(productsCollection, where('genero', '==', genero )); // obtenemos el query
      getDocs(q).then(snapshot =>{ // obtenemos los documentos
        setProductos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))); // seteamos el estado
      })
    } 
  }, [genero]);


    return (
      <>
         <Banner /> 
        <Categorias />
        <div className="d-flex gap-5 mb-5 justify-content-center flex-wrap">
          {productos.map((producto) => (
          <CatDisplay id={producto.id} nombre={producto.title} genero={producto.genero} imagen={producto.img} precio={producto.price} key={producto.id} detail={producto.detail} inicial={1} max={producto.stock} agregarCantidad={sumarCarrito}/>
        ))}
        </div>
      </>
    );
  
} 


export default CategoriaDetail;


/* 

        <Banner />    


*/
