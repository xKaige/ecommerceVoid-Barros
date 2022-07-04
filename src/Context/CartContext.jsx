import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('productos')) ?? []);
  
  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(cart));
}, [cart]);

  // Agrega un producto al carrito sin repetir
  const addItem = (item, count) => {
    const newItem = {
      ...item, count,
    };

    if (inCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].count += count;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };
 

  // Detecta si el producto ya esta en el carrito TRUE / FALSE
  const inCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  // Vacia el carrito
  const emptyCart = () => {
    setCart([]);
  };

  // Elimina un producto del carrito
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  // devuelve la cantidad de un producto en el carrito
  const getItemQty = () => {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  };

  // devuelve el precio del producto
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.count), 0);
  };

  // actualizar precio del carrito

  const upDateItemPrice = (id, cant) => {
    const productosModificados = cart.map(item =>{
      if (item.id === id){
        return {...item, count: cant};
      } 
      return item
    })   
    setCart(productosModificados)
  };

  // actualizar stock

  const upDateStock = (id, stock) => {
    const stockModificado = cart.map( item => {
      if (item.id === id){
        return {...item, stock: stock}
      }
      return item
    })
    setCart(stockModificado)
  };


  return (
    <Provider value={{ cart, inCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, upDateItemPrice, upDateStock }}> { children } </Provider>  );
};

export default MyProvider;


/* 

  const modificarProducto = (producto: Producto) => {
    const productosNuevos = productos.map(item => {
      if (item.id === producto.id) {
        return { ...item, cantidad: producto.cantidad, precio: producto.precio };
      }
      return item;
    });
    setProductos(productosNuevos);
  }

  Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)


*/