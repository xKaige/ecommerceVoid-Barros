import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/routes/Footer";
import Home from "../src/routes/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoriaDetail from "./components/CategoriaDetail";
import Contactos from "./routes/Contactos";
import Nosotros from "./routes/Nosotros";
import MyProvider from "./Context/CartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Producto/:id" element={<ItemDetailContainer />} />
            <Route path="/genero/:genero" element={<CategoriaDetail />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Contacto" element={<Contactos />} />
            <Route path="/Cart" element={<CartContainer />} />
          </Routes>

        </MyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
