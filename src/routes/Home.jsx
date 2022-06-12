import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';
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
            <ItemDetailContainer />
        </>)
}

export default Home;