import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./routes/Footer";
import Home from "./routes/Home";
import { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoriaDetail from "./components/CategoriaDetail";
import Contactos from "./routes/Contactos";
import Nosotros from "./routes/Nosotros";

function App() {
  // CARRITO
  const [carrito, setCarrito] = useState(0);

  const sumarCarrito = (cantidad) => {
    setCarrito(carrito + cantidad);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar cantidad={carrito} />
        <Routes>
          <Route path="/" element={<Home sumarCarrito={sumarCarrito} />} />
          <Route path="/Producto/:id" element={<ItemDetailContainer />} />
          <Route
            path="/genero/:genero" element={<CategoriaDetail sumarCarrito={sumarCarrito} />}
          />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contactos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
