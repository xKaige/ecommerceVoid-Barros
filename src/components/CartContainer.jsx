import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";

function CartContainer() {
  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5">
            <div className="total-container"> <span className="fw-bold">Total de la compra: </span>{getItemPrice()} </div>
            <button onClick={emptyCart} className="mt-3"> Eliminar Carrito </button>
            <button className="mt-3 ms-5"> Finalizar la compra </button>
          </div>
        </div>
        <div className="row gap-3">
            {cart.map((juego) => <Cart  id={juego.id} nombre={juego.title} imagen={juego.img} key={juego.id} precio={juego.price} deleteItem={deleteItem} cantidad={juego.count} />)}
        </div>

      </div>
    </>
  );
}

export default CartContainer;
