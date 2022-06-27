import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";
import {Link} from 'react-router-dom';

function CartContainer() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <div className="container cart-background">
            <div className="row gap-3 cart-background">
                {cart.map((juego) => <Cart  id={juego.id} nombre={juego.title} imagen={juego.img} key={juego.id} precio={juego.price} deleteItem={deleteItem} cantidad={juego.count} stock={juego.stock} inicial={1} />)}
            </div>          
          </div>
          <div className="row text-center">
            <div className="col-4 mt-5"></div>
              <div className="col-6 mt-5">
                <div className="total-container"> <span className="fw-bold">Total de la compra:</span> $ { getItemPrice() }</div>
                <button onClick={ emptyCart } className="mt-3"> Eliminar Carrito </button>
                <button className="mt-3 ms-5 mb-5"> Finalizar la compra </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-lg-8 background-cart">
              <h2>No hay un producto agregado <br />
              Volver y agrega productos al carrito!</h2>
              <Link to="/" className=" nav-tipografia nav-link active btn-cart-empty">Volver</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;

/* 



*/
