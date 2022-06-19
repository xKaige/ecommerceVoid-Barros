import { Link } from "react-router-dom";

function Item({ nombre, imagen, id, detail, genero, stock }) {

    return (
        <>
            <div className="card card-size mt-5">
                <div className="card-body">
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
                    <div className="d-flex gap-3 justify-content-center mt-5">
                        <Link to={"/producto/" + id } ><button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add">Examinar</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item