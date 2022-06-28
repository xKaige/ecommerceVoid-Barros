import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);

  return (
    <>
      <BsCart2 size={22} />
      { getItemQty() >= 1 ? <div>{getItemQty()}</div> : null }

    </>
  );
}

export default CartWidget;

