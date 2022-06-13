
const ItemDetail = ({ title, detail, img, stock, price }) => {
  return (
    <>

      <div className="container container-detail">
        <div className="row">
          <div className="col-12 col-sm-6 pt-5">
            <div className="card mb-3 card-style">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img} className="img-fluid img-detail" />
                </div>
                <div className="col-md-8 col-sm-6 pt-5">
                  <div className="card-body">
                    <h5 className="card-title card-title-detail">{title}</h5>
                    <p className="card-text card-detail mt-3">{detail}</p>
                    <p className="card-text price-detail">PRECIO: ${price}</p>
                    <p className="card-text stock-detail">Hay {stock} productos en stock</p>
                    <div className="d-flex gap-3 justify-content-center mt-3">
                        <button  type="button" className="btn card-btn">-</button>
                        <h2>1 </h2>
                        <button type="button" className=" btn card-btn">+</button>
                    </div>
                    <button type="button" className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5">Agregar al Carrito</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ItemDetail;


