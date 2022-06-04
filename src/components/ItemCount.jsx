import Swal from 'sweetalert2'
import { useState } from "react"
import sunBreaker from "../img/sunbreaker.jpg"

function ItemCount({ inicial, onAdd, max }) {

    const [count, setCount] = useState(inicial)
    const [stock, setStock] = useState(max)
    
    const sumar = () =>{
            count < max ? setCount ( count + 1 ) : alert("No puedes agregar mas productos")
        }
    
        const restar = () => {
            count > inicial ? setCount ( count - 1 ) : alert("Agregue productos por favor")
        }
    
        const reset = () => {
            setCount(inicial)
        }

        const restarStock = () => {
           stock >= count ? setStock ( stock - count ) : console.log("No hay stock de este producto")
        }

        const ValidarStock = () => {
            if (stock <= 20 && stock!==0){
                restarStock()
                onAdd(count)
                reset()
            } if ( stock === 0){     
                Swal.fire({
                    title: `No hay mas stock de este producto`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                  })
            };
        }
        

    return (
        <>
            <div className="card card-size d-flex ">
                <div className="card-body">
                    <h5 className="card-title fw-bolder">Monster Hunter Rise SunBreaker</h5>
                    <span>Stock: {stock} unidades </span>
                    <img src={sunBreaker} className="card-img-top" alt="..."></img>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur interdum libero et mollis.</p>
                    <div className="d-flex gap-3 justify-content-center mt-3">
                        <button onClick={restar} type="button" className="btn card-btn">-</button>
                        <h2>{count} </h2>
                        <button onClick={sumar} type="button" className="btn card-btn">+</button>
                    </div>
                    <div className="d-flex gap-3 justify-content-center mt-1">
                        <button onClick={() => { ValidarStock() }} type="button" className="btn card-btn mt-3 btn-sm btn-add">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount