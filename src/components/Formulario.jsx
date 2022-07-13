import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CartContext } from "../Context/CartContext";
import {  addDoc,  Timestamp,  collection,  getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2';

export default function CheckoutForm({ setIdBuy }) {
  const [formSent, setFormSent] = useState(false);

  const { cart, getItemPrice, emptyCart } = useContext(CartContext);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const sleep = () => new Promise((r) => setTimeout(r));

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          celphone: "",
          message: "",
        }}
        validate={(val) => {
          let errors = {};

          if (!val.name) {
            errors.name = "Please enter a name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)) {
            errors.name = "The name can only contain letters and spaces";
          }
          if (!val.email) {
            errors.email = "Please enter an email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)
          ) {
            errors.email = "Please enter a valid email";
          }

          if (!val.celphone) {
            errors.celphone = "Please enter a celphone number";
          } else if (!/^\d{0,20}$/.test(val.celphone)) {
            errors.celphone = "Please enter a valid celphone number";
          }

          if (!/^[a-zA-Z0-9 ]{0,50}?$/.test(val.message)) {
            errors.message = "maximum 50 alphanumeric characters";
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          await sleep();
          const order = {
            buyer: { ...values },
            date: new Date(Timestamp.now().seconds * 1000),
            total: getItemPrice(),
            items: [...cart],
          };
          addDoc(orderCollection, order).then(({ id }) => {
            setIdBuy(id);
          });
          Swal.fire(`
                Gracias por su compra!
                Nombre: ${values.name}, 
                Email: ${values.email}, 
                Total: ${getItemPrice()}`) 
          resetForm();
          emptyCart();
          setFormSent(true);
          setTimeout(() => {
            setFormSent(false);
          }, 5000);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="namex">* Name</label>
              <Field
                type="text"
                id="namex"
                name="name"
                placeholder="Frederick Gales"
              />
              <ErrorMessage
                name="name"
                component={() => <div className="error">{errors.name}</div>}
              />
            </div>

            <div>
              <label htmlFor="emailx">* Email </label>
              <Field
                type="email"
                id="emailx"
                name="email"
                placeholder="frederick@gmail.com"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>

            <div>
              <label htmlFor="cel">* Celphone</label>
              <Field
                type="text"
                id="cel"
                name="celphone"
                placeholder="117895658525"
              />
              <ErrorMessage
                name="celphone"
                component={() => <div className="error">{errors.celphone}</div>}
              />
            </div>

            <div>
              <label htmlFor="messagex">Message </label>
              <Field
                name="message"
                as="textarea"
                placeholder="your message..."
                style={{ resize: "none" }}
              />
              <ErrorMessage
                name="message"
                component={() => <div className="error">{errors.message}</div>}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
            <br />
            {!formSent ? (
              <p style={{ color: "red", fontSize: ".7rem" }}>
                * obligatory field{" "}
              </p>
            ) : (
              <p style={{ color: "green" }} className="exito">
                Form sent successfully
              </p>
            )}
          </Form>
        )}
      </Formik>
    </>

    /*  </Card> */
  );
}



/* 
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useState, useContext} from 'react';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {CartContext} from '../Context/CartContext';

function Formulario() {

    const { cart, getItemPrice, emptyCart } = useContext(CartContext);
    
    const [ enableAdd, setEnableAdd ] = useState(true);
    const MySwal = withReactContent(Swal)  
    const [ form, setForm ] = useState({})
          
    const db = getFirestore();
    const orderCollection = collection(db, "orders")


    function handleClick() {
        const order = {buyer: form, items: cart, total: getItemPrice()}   
        addDoc(orderCollection, order)
            .then(({ id }) =>{
                MySwal.fire(`
                Gracias por su compra!
                ID: ${id},
                Nombre: ${order.buyer.name}, 
                Email: ${order.buyer.email}, 
                Total: ${order.total}`) 
        })
    
        localStorage.removeItem('productos');
        setTimeout(function(){
            emptyCart();
        }, 5000);

    }
        
    function handleChange (e) {
        setForm({...form, [e.target.name]:e.target.value})
    }

  return (
    <>
        <Formik
            initialValues={{
                nombre: "",
                email: "",
                telefono: "",
            }}
            validate={(valores)=>{
                let errores = {};

                // Validar nombre
                if(!valores.nombre){
                   errores.nombre = "Por favor ingrese su nombre"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre = "El nombre solo puede contener letras y espacios"
                }

                // Validar email
                if(!valores.email){
                   errores.email = "Por favor ingrese su email"
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                    errores.email = "El corre no es valido"
                }

                // Validar telefono
                if(!valores.telefono){
                   errores.telefono = "Por favor ingrese su telefono"
                } else if(!/^\+[1-9]{1}[0-9]{3,14}$/.test(valores.telefono) && !/^[0-9]{8,14}$/.test(valores.telefono)){
                    errores.telefono = "El telefono solo puede contener números y un maximo de 10 caracteres"
                }

                if (valores.nombre == "" || valores.email == "" || valores.telefono == "") {
                    setEnableAdd(true);
                } else if (valores.nombre != "" && valores.email != "" && valores.telefono.length >= 10) {
                    setEnableAdd(false);
                }
                return errores;
            }}
            onSubmit={({ resetForm }) => {
                resetForm();
            }}>

            {/* FORMULARIO 

            {( { errors} ) => (
                <Form> 
                    <div>
                        <label htmlFor='nombre'> Nombre </label> 
                        <Field 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            placeholder='Ingrese su Nombre' 
                        />
                        <ErrorMessage name="nombre" component={()=>(<div className="error form-error">{errors.nombre}</div>)} />
                    </div>
                    <div>
                        <label htmlFor='email'> Email </label> 
                        <Field 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder='Ingrese su Email' 
                        />
                        <ErrorMessage name="email" component={()=>(<div className="error form-error">{errors.email}</div>)} />
                    </div>
                    <div>
                        <label htmlFor='telefono'> Telefono </label> 
                        <Field 
                            type="tel" 
                            id="telefono" 
                            name="telefono" 
                            placeholder='Ingrese su Telefono de Contacto'
                            maxlength="10"
                            minlength="1"
                         />
                          <ErrorMessage name="telefono" component={()=>(<div className="error form-error">{errors.telefono}</div>)} />
                    </div>
                    <button type="submit" onClick={handleClick} disabled={enableAdd}> Finalizar Compra </button>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default Formulario;

*/