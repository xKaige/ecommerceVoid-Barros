import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CatDisplay({id, nombre, imagen, detail, inicial, max, onAdd, agregarCantidad, genero}){

    const [count, setCount] = useState(inicial)
    const [stock, setStock] = useState(max)

    const sumar = () => {
        count < max ? setCount(count + 1) : alert("No puedes agregar mas productos")

    }

    const restar = () => {
        count > inicial ? setCount(count - 1) : alert("Agregue productos por favor")

    }

    const reset = () => {
        setCount(inicial)
    }

    const restarStock = () => {
        stock >= count ? setStock(stock - count) : console.log("No hay stock de este producto")
    }

    const validarCantidadSumar = () => {
        return count + 1 > stock;
    }
    const validarCantidadAgregar = () => {
        return count > stock;
    }

    const ValidarStock = () => {
        if (stock <= 20 && stock !== 0) {
            restarStock()
            onAdd(count)
            agregarCantidad(count)
            reset()
        } if (stock === 0) {
            Swal.fire({
                title: `No hay mas stock de este producto`,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        };
    }


    return (
        <>
            <div className=" d-inline-block ms-5 card card-size mt-5">
                <div className="card-body ">
                    <h5 className="card-title fw-bolder"> {nombre} </h5>
                    <span className='fw-bold'>Stock:</span><span> {stock} unidades </span>
                    <div className='card-img-container'>
                        <img src={imagen} className="card-img-top" alt="..."></img>
                    </div>
                    <div className="card-genero-tag">
                        <span className="fw-bold text-capitalize card-genero-span"> {genero} </span>
                    </div>
                    <div className="card-text-container">
                        <p className="card-text"> { detail } </p>
                    </div>
                    <div className="d-flex gap-3 justify-content-center mt-3">
                        <button onClick={restar} type="button" className="btn card-btn">-</button>
                        <h2>{count} </h2>
                        <button onClick={sumar} type="button" className=" btn card-btn" disabled={validarCantidadSumar()}>+</button>
                    </div>
                    <div className="d-flex gap-3 justify-content-center mt-1">
                        <button onClick={() => { ValidarStock() }} type="button" className="btn card-btn-cart mt-3 btn-sm btn-add" disabled={validarCantidadAgregar()}>Agregar al Carrito</button>
                        <Link to={"/producto/" + id } ><button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add">Examinar</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CatDisplay;