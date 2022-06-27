import { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = ({ nombre, imagen, precio, deleteItem, id, cantidad, inicial }) => {

  const { upDateItemPrice  } = useContext(CartContext);
  const [ input, setInput ] = useState(inicial)
  const [ cant, setCant ] = useState(cantidad)

  // SUMA O RESTA EL INPUT 
   const sumar = () => {
    setInput(input + 1);
  };

  const restar = () => {
    if ( input > inicial){
      setInput(input - 1);
   } else {
    console.log("x")
   }
  };

  // RESETEA CADA VEZ QUE SE AGREGA O ELIMINA UNA UNIDAD DEL PRODUCTO
  const reset = () => {
    setInput(inicial);
  };

  // AGREGAR AL CARRITO LA UNIDAD
  const agregar = () =>{
    const cantidadTotal = cant + input;
    reset()
    setCant( cantidadTotal )
    upDateItemPrice(id, cantidadTotal)
  }

  // REMUEVE DEL CARRITO LA UNIDAD
  const remover = () =>{
   if ( cant > 1 ){
    const cantidadTotal = cant - input;
    reset()
    setCant (cantidadTotal)    
    upDateItemPrice(id, cantidadTotal)
   } else {
    deleteItem(id)
   }
  }
 

  // RETURN 
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-2 mt-5">
            <div className="cart-img-container">
              <img src={ imagen } alt={ nombre } className="img-fluid" />
            </div>
          </div>
          <div className="col-3">
            <h3 className="mt-5"> { nombre } </h3>
            <p>
              <span className="fw-bold">Precio: $</span>{ precio }
              <p>
                <span className="fw-bold">Items Agregados:</span> { cant }
              </p>
            </p>
          </div>
          <div className="col-2 mt-5">
            <button button onClick={()=>{deleteItem(id)}} className="nav-item mt-5 btn-elm-item">Eliminar Articulo</button>
          </div>
          <div className="col-5 mt-5 d-flex align-items-end justify-content-around">
            <button onClick={ restar } className="nav-item mt-5 cart-btn btn-restar">-</button>
            <span>{ input }</span>
            <button onClick={ sumar } className="nav-item mt-5 cart-btn btn-sumar">+</button>
            <button onClick={ agregar } className="nav-item mt-5 cart-btn-agr">Agregar</button>
            <button onClick={ remover } className="nav-item mt-5 cart-btn-ele">Eliminar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

/* 
        <div className="col-lg-3 cart-container"> 
          <h3 className="cart-name"> {nombre} </h3>
          <div className="cart-img-container">
              <img src={imagen} alt={nombre} className="img-fluid" />
          </div>
          <div className="cart-txt-container mt-3">
            <p><span className="fw-bold">Precio:</span> {precio}</p>
      
            <button onClick={()=>{deleteItem(id)}} className="nav-item mt-5"> Elminiar Producto</button>
          </div>
        </div>

*/
