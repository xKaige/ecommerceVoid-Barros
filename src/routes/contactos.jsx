import React from "react";

function Contactos() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h2 className="fw-bold"> Escribinos! </h2>
            <p>
              Vivamus et lacus a enim elementum molestie. Cras in ornare nulla.
              Cras in lacus non dolor feugiat sodales sit amet sed est.
              Vestibulum metus tortor, varius nec urna nec, molestie tempus
              neque. Nunc sodales lobortis leo hendrerit imperdiet. Donec semper
              suscipit risus, sit amet rhoncus nisl tincidunt sed. Etiam commodo
              purus massa. Aliquam in augue ac ligula dictum commodo.<br/><br/> Vivamus
              justo dui, facilisis nec ultrices a, bibendum vel ipsum. Nam
              dapibus sapien in felis tristique convallis. Praesent vel sapien
              ac arcu iaculis accumsan ac eget diam. Nam vulputate tristique
              libero, sit amet rutrum ante viverra ac. Aenean fringilla erat
              purus, a suscipit nunc fermentum nec. Fusce sollicitudin, sapien
              vel bibendum convallis, ante justo vestibulum erat, et volutpat
              leo justo id tortor. Sed mollis semper quam, et venenatis lectus
              tempor eu. Vivamus eget lacinia massa, nec varius nibh.
            </p>
          </div>
          <form  className="col-lg-6 mt-5 ps-5"> 
                <div>
                    <div className="mb-3 mt-5 ">
                        <label for="exampleFormControlInput1" className="form-label fw-bold">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label fw-bold" required> Su comentario por favor </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="submit" className="btn btn-primary mt-3"> Enviar  </button>
                    </div>
                </div>
            </form>
          <div className="col-lg-2"></div>
          <div className="col-lg-8 mt-5 pb-5 pt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.45019228102!2d-58.495349084370474!3d-34.64333188044939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9a43f0129b9%3A0x300f04884dc2058d!2sAv.%20Juan%20Bautista%20Alberdi%204755%2C%20C1407%20HAB%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642196549463!5m2!1ses-419!2sar"
              width="800" height="450" className="iframe-mapa" />
           <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactos;
