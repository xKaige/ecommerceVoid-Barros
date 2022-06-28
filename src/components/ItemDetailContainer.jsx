import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({}) // estado inicial
    const { id } = useParams() // id de la url

    useEffect(()=>{
        const db = getFirestore(); // obtenemos la base de datos

        const productRef = doc(db, 'Item', id); // obtenemos el documento

        getDoc(productRef)
            .then((snapshot) =>{
                setItemDetail({...snapshot.data(), id: snapshot.id}); // seteamos el estado
        })

    }, [id]); // solo se ejecuta cuando el id cambie


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