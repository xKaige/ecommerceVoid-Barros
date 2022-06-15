import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ onAdd, sumarCarrito }) {
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

  return (
    <>
      <ItemList juegos={juegoList} onAdd={onAdd} sumarCarrito={sumarCarrito} />
    </>
  );
}

export default ItemListContainer;

// https://api.rawg.io/api/games?page=2&page_size=10&key=75c173d0dedd439c87e43009cc9c3923
