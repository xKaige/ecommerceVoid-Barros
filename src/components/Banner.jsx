import got from "../img/got.png";
import horizon from "../img/hrfb.png";
import xbc from "../img/xbc3.jpg";

function Banner() {
  return (
    <>
      <section className="hero-home-container">
        <div className="hero-container">
          <div className="hero-txt">
            <h2 className="hero-h">Be greater. Be yourself</h2>
            <p className="hero-p">
              Experimenta el ascenso de Miles Morales y sé testigo de cómo el
              nuevo héroe domina nuevos poderes increíbles y explosivos para
              convertirse en su propia versión de Spider-Man.
            </p> 
            <button className="hero-btn">Proximamente</button>           
          </div>
        </div>
        <div className="hero-footer"/>
      </section>
    </>
  );
}

export default Banner;

/* 
            <div id="carouselExampleCaptions" className="carousel slide carousel-txt carousel-fx " data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-img">
                        <img src={got} className="d-block w-100" alt="Ghost of Tsushima" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Ghost of Tsushima</h3>
                            <p>Forja un nuevo camino y emplea tácticas de guerra poco convencionales para liberar Tsushima. Desafía a tus enemigos con tu katana, domina el arco para eliminar las amenazas lejanas, aprende tácticas de sigilo para emboscar a los enemigos y explora una nueva historia en la Isla Iki</p>
                        </div>
                    </div>
                    <div className="carousel-item carousel-img">
                        <img src={horizon} className="d-block w-100" alt="Horizon Forbidden West" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Horizon Forbidden West</h3>
                            <p>Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas.</p>
                        </div>
                    </div>
                    <div className="carousel-item carousel-img">
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


*/
