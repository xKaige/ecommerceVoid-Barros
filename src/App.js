import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Swal from 'sweetalert2'
import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";
import { useState } from "react"


function App() {
  const onAdd = (count) => {
    Swal.fire({
      title: `Agregaste ${count} item al carrito`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }) 
  }

  // CARRITO 
  const [carrito, setCarrito] = useState(0);
  
  const sumarCarrito = (cantidad) =>{
    setCarrito ( carrito + cantidad )
  }

  
  return (
    <>
      <NavBar cantidad={carrito} />
      
      <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 mt-5"> <h2>Bienvenidos a VOID</h2></div>
                <div className="col-4"></div>
            </div>
        </div>

      <ItemListContainer onAdd={onAdd} sumarCarrito={sumarCarrito} />
    </>
  );
}

export default App;
