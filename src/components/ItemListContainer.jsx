import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

function ItemListContainer({ onAdd, sumarCarrito }) {
  const [juegoList, setJuegoList] = useState([]);
  const { id } = useParams()

  useEffect(() => {

    const db = getFirestore(); // obtenemos la base de datos
    const productsCollection = collection(db, 'Item'); // obtenemos la colección

    if (id) {
      const q = query(productsCollection, where('genero', '==', id)); // obtenemos el query
      getDocs(q).then(snapshot =>{ // obtenemos los documentos
        setJuegoList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))); // seteamos el estado
      })

    } else {

      getDocs(productsCollection).then(snapshot =>{ // obtenemos los documentos
        setJuegoList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))); // seteamos el estado
      })
    }
  
  }, [id]);

  return (
    <>
      <ItemList juegos={juegoList} onAdd={onAdd} sumarCarrito={sumarCarrito} />
    </>
  );
}

export default ItemListContainer;

// https://api.rawg.io/api/games?page=2&page_size=10&key=75c173d0dedd439c87e43009cc9c3923

/* 
  const [juegoList, setJuegoList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("juegos.json")
        .then((res) => res.json())
        .catch((error) => console.error("Error", error))
        .then((body) => {
          setJuegoList(body);
        });
    }, 2000);
  }, []);

*/