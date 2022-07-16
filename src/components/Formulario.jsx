import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CartContext } from "../Context/CartContext";
import {  addDoc,  collection,  getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2';
import { useNavigate  } from "react-router-dom";

export default function CheckoutForm() {

  const [formSent, setFormSent] = useState(false);

  const { cart, getItemPrice, emptyCart } = useContext(CartContext);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const navigate = useNavigate()

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
            errors.name = "Por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)) {
            errors.name = "El nombre debe contener solo letras";
          }
          if (!val.email) {
            errors.email = "Por favor ingrese su email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)
          ) {
            errors.email = "Por favor ingrese un email valido";
          }

          if (!val.celphone) {
            errors.celphone = "Por favor ingrese su numero de contacto";
          } else if (!/^\d{0,20}$/.test(val.celphone)) {
            errors.celphone = "Por favor ingrese un numero de contacto valido";
          }

          return errors;
        }}
        
        onSubmit={async (values, { resetForm }) => {
          await sleep();
          const order = {
            buyer: { ...values },
            total: getItemPrice(),
            items: [...cart],
          };
          
          addDoc(orderCollection, order)
            .then(({ id }) => {
             // setIdBuy(id);

           
             Swal.fire(`
                  Gracias por su compra!
                  ID: ${id}
                  Nombre: ${values.name}, 
                  Email: ${values.email}, 
                  Total: $${order.total}`) 
            })
            .finally(() => {
              navigate("/");


            resetForm();
            emptyCart();
            setFormSent(true);
            setTimeout(() => {
            setFormSent(false);
            })

          },);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="formulario">
            <div className="form-name">
              <label htmlFor="namex">Nombre</label>
              <Field
                type="text"
                id="namex"
                name="name"
                placeholder="Ingrese su nombre"
                className="field-input"
              />
              <ErrorMessage name="name" component={() => <div className="error" style={{ color: "red", fontSize: ".8rem" }}>{errors.name}</div>} />
            </div>

            <div className="form-email">
              <label htmlFor="emailx">Email </label>
              <Field
                type="email"
                id="emailx"
                name="email"
                placeholder="Ingrese un email"
                className="field-input"
              />
              <ErrorMessage name="email" component={() => <div className="error" style={{ color: "red", fontSize: ".8rem" }}>{errors.email}</div>} />
            </div>

            <div>
              <label htmlFor="cel">Telefono</label>
              <Field
                type="text"
                id="cel"
                name="celphone"
                placeholder="Ingrese su telefono"
                className="field-input"
                maxlength="10"
                minlength="1"
              />
              <ErrorMessage name="celphone" component={() => <div className="error" style={{ color: "red", fontSize: ".8rem" }}>{errors.celphone}</div>} />
            </div>
            <button type="submit" className="form-subtmit" disabled={isSubmitting}> Send </button>
            <br />
            {!formSent ? ( <p style={{ color: "red", fontSize: ".7rem" }}> * Campos Obligatorios{" "} </p>
            ) : ( <p style={{ color: "green" }} className="exito"> Formulraio enviado con exito </p>)}
          </Form>
        )}
      </Formik>
    </>

  );
}

