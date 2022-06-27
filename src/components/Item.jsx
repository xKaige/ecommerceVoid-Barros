import { Link } from "react-router-dom";

function Item({ nombre, imagen, id, detail, genero, precio }) {
  return (
    <>
      <div className="hero-container">
        <a href="#" className="hero-link-display">
          <div className="hero-container-img">
            <img src={imagen} className="hero-img-position" alt="Imagen" />
          </div>
          <div className="hero-container-display">
            <div className="hero-container-info">
              <h2 className="hero-display-h2"> {nombre} </h2>
              <p className="hero-display-p"> {detail }</p>
            </div>
            <div className="hero-category mt-3">{ genero } </div>
            <div className="hero-ex-stc">
                <Link to={"/producto/" + id } ><button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add btn-examinar">Examinar</button></Link>
            <div className="hero-bar-stc">
                <div className="prod-price"> Precio: ${ precio } </div>
            </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Item;

/* 
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

*/
