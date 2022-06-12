import Swal from 'sweetalert2'
import { useState } from "react"

function Item({ inicial, onAdd, max, agregarCantidad, nombre, imagen, id }) {

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
            <div className="card card-size mt-5">
                <div className="card-body">
                    <h5 className="card-title fw-bolder"> {nombre} </h5>
                    <span className='fw-bold'>Stock:</span><span> {stock} unidades </span>
                    <img src={imagen} className="card-img-top" alt="..."></img>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur interdum libero et mollis.</p>
                    <div className="d-flex gap-3 justify-content-center mt-3">
                        <button onClick={restar} type="button" className="btn card-btn">-</button>
                        <h2>{count} </h2>
                        <button onClick={sumar} type="button" className=" btn card-btn" disabled={validarCantidadSumar()}>+</button>
                    </div>
                    <div className="d-flex gap-3 justify-content-center mt-1">
                        <button onClick={() => { ValidarStock() }} type="button" className="btn card-btn-cart mt-3 btn-sm btn-add" disabled={validarCantidadAgregar()}>Agregar al Carrito</button>
                        <button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add">Examinar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item