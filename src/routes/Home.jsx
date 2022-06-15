import ItemListContainer from '../components/ItemListContainer';
import Banner from '../components/Banner';
import Categorias from '../components/Categoria';
import Swal from 'sweetalert2';




function Home({sumarCarrito} ){

    const onAdd = (count) => {
        Swal.fire({
          title: `Agregaste ${count} item al carrito`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
      }
    
    return (
        <>
            <Banner />
            <Categorias />
            <ItemListContainer onAdd={onAdd} sumarCarrito={sumarCarrito} />
        </>)
}

export default Home;