import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./routes/footer";
import Home from "./routes/Home";
import {useState} from 'react';
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {

        // CARRITO 
        const [carrito, setCarrito] = useState(0);
    
        const sumarCarrito = (cantidad) => {
          setCarrito(carrito + cantidad)
        }

  return (
    <>
      <BrowserRouter>
          <NavBar cantidad={carrito} />
            <Routes>
              <Route path="/" element={ <Home sumarCarrito={ sumarCarrito } /> } />
              <Route path="/Producto/:id" element={ <ItemDetailContainer /> } />
              <Route path="/Nosotros" />
              <Route path="/Contacto" />
            </Routes>
          <Footer />
        </BrowserRouter>
 
    </>
  );
}

export default App;
