import { Link } from "react-router-dom";

function Categorias() {
  return (
    <>
      <div className="container-fluid cat-margin">
        <div className="row">
        <div className="col-lg-1"></div>
          <div className="col-lg-10 col-ms-4 d-flex flex-wrap mt-5 cat-a mb-5">
            <h3 className="cat-h3">Generos:</h3>
            <Link to={"/genero/accion"} className="cat-link cat-accion"> Accion </Link>
            <span>/</span>
            <Link to={"/genero/aventura"} className="cat-link"> Aventura </Link>
            <span>/</span>
            <Link to={"/genero/rol"} className="cat-link"> Rol </Link>
            <span>/</span>
            <Link to={"/genero/carrera"} className="cat-link"> Carrera </Link>
            <span>/</span>
            <Link to={"/"} className="cat-link"> Reset </Link>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default Categorias;
