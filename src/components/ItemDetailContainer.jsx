import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Spinner from "./Spinner";


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({}) // estado inicial
    const { id } = useParams() // id de la url
    const [loading, setLoading] = useState(true) // estado inicial

    useEffect(()=>{
        const db = getFirestore(); // obtenemos la base de datos
        const productRef = doc(db, 'Item', id); // obtenemos el documento
        getDoc(productRef)
            .then((snapshot) =>{
                setLoading(false); // cambiamos el estado
                setItemDetail({...snapshot.data(), id: snapshot.id}); // seteamos el estado
        })

    }, [id]); // solo se ejecuta cuando el id cambie

     return (
        loading ? <Spinner /> : <ItemDetail item={itemDetail} inicial={1} />               
    );    
};

export default ItemDetailContainer;