import gow from "../img/gow-rag.png"
import horizon from "../img/hrfb.png"
import xbc from "../img/xbc3.jpg"


function Banner() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-txt" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={gow} className="d-block w-100" alt="God of War Ragnarok" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>God of War Ragnarok</h3>
                            <p>Kratos y Atreus se embarcan en una mítica aventura en busca de respuestas y aliados antes de la llegada del Ragnarök.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={horizon} className="d-block w-100" alt="Horizon Forbidden West" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Horizon Forbidden West</h3>
                            <p>Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={xbc} className="d-block w-100" alt="Xenoblade Chronicles 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Xenoblade Chronicles 3</h3>
                            <p>"Luchar para vivir. Vivir para luchar."
                                Te aguarda un nuevo juego de rol y aventura: Xenoblade Chronicles 3 para Nintendo Switch.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </>
    )

}

export default Banner;