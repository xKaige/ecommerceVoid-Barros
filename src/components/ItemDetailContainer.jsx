import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({}) // estado inicial
    const { id } = useParams() // id de la url

    useEffect(() => {
        fetch("../../juegos.json") // Asi funciona?
            .then(res => res.json()) 
            .then(productos => { setItemDetail(productos.find(producto => producto.id == id)) }) // Filtro el producto por el id
            .catch(error => console.error("Error", error)) // Si hay error, lo muestro en consola
        console.log(itemDetail)
    }, [id]); // Solo se ejecuta cuando el id cambia

    return (
        <>
            <ItemDetail id={itemDetail.id} title={itemDetail.title} img={itemDetail.img} detail={itemDetail.detail} price={itemDetail.price} stock={itemDetail.stock} />
        </>
    );
};

export default ItemDetailContainer;

// {setItemDetail(productos.find(producto => producto.id === id))},  
