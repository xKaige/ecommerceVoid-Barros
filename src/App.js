import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Swal from 'sweetalert2'
import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";


function App() {
  const onAdd = (count) => {
    Swal.fire({
      title: `Agregaste ${count} item al carrito`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }) 
  }

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="VOID" />
      <ItemCount inicial={1} max={10} onAdd={onAdd} />
    </>
  );
}

export default App;
