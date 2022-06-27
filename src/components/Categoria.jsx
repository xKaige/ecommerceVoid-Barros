import { Link } from "react-router-dom";

function Categorias() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-ms-12 d-flex flex-wrap gap-5 mt-5 justify-content-center cat-a mb-5">
            <Link to={"/genero/accion"}> Accion </Link>
            <Link to={"/genero/aventura"}> Aventura </Link>
            <Link to={"/genero/rol"}> Rol </Link>
            <Link to={"/genero/carrera"}> Carrera </Link>
            <Link to={"/"}> Reset </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorias;
