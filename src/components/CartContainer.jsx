import { useContext, useState } from 'react';
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Cart from "./Cart";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function CartContainer() {

  const { cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext);
  const submitHandler = (e) => {e.preventDefault();}
  
  const MySwal = withReactContent(Swal)  
  const [ form, setForm ] = useState({})

  const [ enableAdd, setEnableAdd ] = useState(true);
  
  const db = getFirestore();
  const orderCollection = collection(db, "orders")


   function handleClick() {
      const order = {buyer: form, items: cart, total: getItemPrice()}   
      setEnableAdd(false); 
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
      {cart.length > 0 ? (
        <div className="form-container">
          <div className="container cart-background ">
            <div className="row gap-3 cart-background ">
                {cart.map((juego) => <Cart  id={juego.id} nombre={juego.title} imagen={juego.img} key={juego.id} precio={juego.price} deleteItem={deleteItem} cantidad={juego.count} stock={juego.stock} inicial={1} />)}
            </div>          
          </div>
          <div className="row text-center">
            <div className="col-4 mt-5"></div>
              <div className="col-6 mt-5">
                <div className="total-container"> <span className="fw-bold">Total de la compra:</span> $ { getItemPrice() }</div>

                              {/* CHECKOUT */}
              <div className='col-md-12  form-container'>
                <h1 className='form-title mt-5'>Check Out</h1>
                <form onSubmit={submitHandler} className="form"> 
                    <label> Ingese su Nombre </label>
                        <input name="name" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su nombre"></input>
                    <label> Ingese su email </label>
                        <input name="email" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su Email"></input>
                    <label> Ingese Telefono de contacto </label>
                        <input name="cel" onChange={handleChange} disabled={!enableAdd} placeholder="Ingrese su Celular"></input>                   
                    <button onClick={handleClick} disabled={!enableAdd} type="submit" className='form-submit'>TERMINAR COMPRA</button>
                </form> 
              </div>
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
      MySwal.fire({
        title: `${idCompra}`,
        text: 'Gracias por su compra',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
*/
     