import { Link } from "react-router-dom";

function CatDisplay({ id, nombre, imagen, detail, genero, precio  }) {
  return (
    <>
    <main>
        <div className="hero-container-item">
          <span className="hero-link-display-item">
            <div className="hero-container-img-item">
              <img src={imagen} className="hero-img-position-item" alt="Imagen" />
            </div>
            <div className="hero-container-display-item">
              <div className="hero-container-info-item">
                <h2 className="hero-display-h2-item"> {nombre} </h2>
                <p className="hero-display-p-item"> {detail }</p>
              </div>
              <div className="hero-category-item mt-3">{ genero} </div>
              <div className="hero-ex-stc-item">
                  <Link to={"/producto/" + id } type="button" className="card-btn-cart mt-3 btn-sm btn-add btn-examinar-item"> Examinar</Link>
                <div className="hero-bar-stc-item">
                    <div className="prod-price-item"> Precio: ${ precio } </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </main>
    </>
  );
}
export default CatDisplay;
