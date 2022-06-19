import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item, inicial }) => {
  const { title, detail, img, price, id } = item;

  const { inCart, addItem, getItemQty } = useContext(CartContext);
  const [count, setCount] = useState(inicial);
  const [cantidad, setCantidad] = useState(0);

  const [enableAdd, setEnableAdd] = useState(true);

  useEffect(() => {
    setCantidad(item.stock);
  }, [item.stock]);

  const sumar = () => {
    if (count < cantidad) {
      setCount(count + 1);
    } else {
      setEnableAdd(false);
    }
  };

  const restar = () => {
    if (count > cantidad) {
      setCount(count - 1);
    } else {
      setEnableAdd(true);
    }
  };

  const reset = () => {
    setCount(inicial);
  };

  const stockActual = () => {
    if (cantidad - count >= 0) {
      setCantidad(cantidad - count);
    } else {
      alert("No hay stock suficiente");
    }
  };

  const onAdd = () => {
    inCart(id);
    addItem(item, count);
    reset();
    stockActual();
  };

  return (
    <>
      <div className="container container-detail">
        <div className="row">
          <div className="col-12 col-sm-6 pt-5">
            <Link to="/" className=" nav-tipografia nav-link active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
              Volver al Home
            </Link>
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
                    <p className="card-text stock-detail">
                      Hay {cantidad} productos en stock
                    </p>
                    <div className="d-flex gap-3 justify-content-center mt-3">
                      <button type="button" onClick={restar} className="btn card-btn" > - </button>
                      <h2>{count}</h2>
                      <button type="button" onClick={sumar} disabled={!enableAdd} className=" btn card-btn" > + </button>
                    </div>
                    <button type="button" onClick={onAdd} className="btn card-btn-cart d-grid gap-2 col-3 mx-auto mt-5"> Agregar al Carrito </button>

                   { (getItemQty() > 0) ? <div className="btn-finalizar"><Link to="/cart" className="btn card-btn-cart"> Finalizar la compra </Link></div>  : null }

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
