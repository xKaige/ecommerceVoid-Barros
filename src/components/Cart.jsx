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
      <div className="container cart-container">
        <div className="row text-center cart-contenedor">
            <div className="col-lg-1 col-sm-3 col-9 mt-5">
              <div className="cart-img-container">
                <img src={ imagen } alt={ nombre } className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-12">
              <h3 className="mt-5"> { nombre } </h3>
              <p>
                <span className="fw-bold">Precio: $</span>{ precio }
                <p>
                  <span className="fw-bold">Items Agregados:</span> { cant }
                </p>
              </p>
            </div>
            <div className="col-lg-2 col-sm-5 col-4 mt-5">
              <button button onClick={()=>{deleteItem(id)}} className="mt-5 btn-elm-item">Eliminar</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

