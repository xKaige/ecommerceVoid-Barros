import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {

    let scroll = window.pageXOffset;
    window.onscroll = function() {

        let scrollActual = window.pageYOffset;
        if(scroll > scrollActual) {
            document.getElementById("scroll").style.top ="0";
        } else {
            document.getElementById("scroll").style.top ="-100px";
        }
        scroll = scrollActual;
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-tipografia sticky-top" id="scroll">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 logoEstilo" href="/">V<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 25 22">
                    <circle cx="10" cy="8" r="8" />
                </svg>ID</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-4 mt-2 align-items-center nav-contenedor">
                        <li className="nav-item">
                            <Link to="/" className="nav-tipografia nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Nosotros" className="nav-tipografia nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Contacto" className="nav-tipografia nav-link">Contacto</Link>
                        </li>
                        <li className="nav-item ps-5">
                         <Link to="/Cart" className="carrito-color d-flex gap-3"><CartWidget /> </Link>
                        </li>                        
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;