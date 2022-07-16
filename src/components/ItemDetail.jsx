import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";



const ItemDetail = ({ item, inicial }) => { // item es el producto
  const { title, detail, img, img1, img2, price, id } = item; // destructuracion

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
    if (count >= 2) {
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
        <div className="container ">
          <div className="row">
              <Link to="/" className=" nav-tipografia detail-volver nav-link active mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
                Volver al Home
              </Link>
              <div className="row detail-container">
                  <div className="col-lg-5 col-ms-5">
                    <img src={img} alt={title} className="img-fluid detail-img" />
                  </div>
                <div className="col-lg-5 col-12 detail-styles">
                  <div className="detail-title">{title}</div>
                  <div className="detail-detail mt-5">{detail}</div>
                  <div className="detail-cart-container d-flex">
                    <div className="d-flex mt-5 detail-botonera">
                      <button onClick={restar} className="detail-btn" > - </button>
                      <div className="botonera align-items-end count-display">{count} </div>
                      <button onClick={sumar} disabled={!enableAdd} className="detail-btn"> + </button>
                      <button onClick={onAdd} className="detail-carrito"> Agregar </button>
                        { (getItemQty() > 0) ? <Link to="/cart" className="detail-finalizar detail-carrito"> Finalizar la compra </Link>  : null }
                    </div>
                  </div>
                    <div> <p className="card-text stock-detail mt-3"> Hay {cantidad} productos en stock </p> </div>
                </div>
                <div className="col-lg-6 col-ms-8 col-sm-12 mt-5">
                  <img src={img1} alt={title} className="img-fluid detail-img" />
                </div>
                <div className="col-lg-6 col-ms-8 col-sm-12 mt-5">
                  <img src={img2} alt={title} className="img-fluid detail-img" />
                </div>
              </div>
          </div>
        </div>

 
    </>
  );
};

export default ItemDetail;

