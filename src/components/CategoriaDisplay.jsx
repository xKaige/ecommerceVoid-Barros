import { Link } from "react-router-dom";

function CatDisplay({ id, nombre, imagen, detail, max, genero }) {
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
              <p className="hero-display-p"> {detail}</p>
            </div>
            <div className="hero-category mt-3">{genero} </div>
            <div className="hero-ex-stc">
              <Link to={"/producto/" + id}> <button type="button" className="btn card-btn-cart mt-3 btn-sm btn-add btn-examinar"> Examinar </button></Link>
              <div className="hero-bar-stc">
                <div className="prod-stock"> Stock: {max} </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
export default CatDisplay;
