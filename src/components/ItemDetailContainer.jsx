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
    }, []); // Solo se ejecuta cuando el id cambia


    return (
        <>           
            <ItemDetail item={itemDetail} inicial={1} />
        </>
    );
};

export default ItemDetailContainer;

// {setItemDetail(productos.find(producto => producto.id === id))},  

// id={itemDetail.id} title={itemDetail.title} img={itemDetail.img} detail={itemDetail.detail} price={itemDetail.price} stock={itemDetail.stock}

/*

function restarStock(cantidad, id){
    const newItem = itemDetail.find(item => item.id == id)
    newItem.stock = newItem.stock - cantidad
}

*/