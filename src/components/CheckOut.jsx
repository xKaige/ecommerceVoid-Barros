import React from 'react'
import {CartContext} from '../Context/CartContext';
import {useContext, useState} from 'react';
import { collection, addDoc, getFirestore} from 'firebase/firestore';

function CheckOut() {

    const [ form, setForm ] = useState({})
    const { cart, getItemPrice, emptyCart } = useContext(CartContext);


    const [ idCompra, setIdCompra ] = useState('');
    const [ nameCompra, setNameCompra ] = useState("");
    const [ emailCompra, setEmailCompra ] = useState("");
    const [ totalCompra, setTotalCompra ] = useState("");


    const [ enableAdd, setEnableAdd ] = useState(true);
    const db = getFirestore();
    const orderCollection = collection(db, "orders")


    function handleClick() {
        const order = {buyer: form, items: cart, total: getItemPrice()}   
        setEnableAdd(false);
        emptyCart();
        // localStorage.removeItem('productos');
        addDoc(orderCollection, order).then(({ id }) =>{
            setIdCompra([id])
            setNameCompra(order.buyer.name)
            setEmailCompra(order.buyer.email)
            setTotalCompra(order.total) 
        })
    }
       
    function handleChange (e) {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
  

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12  form-container'>
                <h1 className='prueba mt-5'>Check Out</h1>
                <form onSubmit={submitHandler} className="form"> 
                    <label> Ingese su Nombre </label>
                        <input name="name" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su nombre"></input>
                    <label> Ingese su email </label>
                        <input name="email" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su Email"></input>
                    <label> Ingese Telefono de contacto </label>
                        <input name="cel" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su Celular"></input>                   
                    <button onClick={handleClick} disabled={!enableAdd} type="submit" className='form-submit'>TERMINAR COMPRA</button>
                </form>
                <div>  { titulo } </div>
 
                { idCompra.length > 0 ? 
                            <>  
                            <div className='form-info-display'>
                                <div className='fw-bold mt-5'> N° de Orden:</div><span className='prueba'>{ idCompra }</span>
                                <div className='fw-bold'> Nombre del comprador:</div><span className='prueba'>{ nameCompra }</span>
                                <div className='fw-bold'> Email registrado </div><span className='prueba'>{emailCompra}</span>
                                <div className='fw-bold '> Total a pagar:</div><span className='prueba'> $ {totalCompra}</span>
                            </div>
                            </>
                            : null
                        }
            </div>
        </div>
    </div>
  )
}

export default CheckOut;
