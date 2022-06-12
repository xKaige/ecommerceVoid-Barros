import Item from "./Item"

function ItemList({juegos, onAdd, sumarCarrito}){

    return(
        <div className=" d-flex flex-wrap">
          {juegos?.map((juego)=>{
                return <Item id={juego.id} nombre={juego.title} imagen={juego.img} key={juego.id} inicial={1} max={juego.stock} onAdd={onAdd} agregarCantidad={sumarCarrito} />
            })}
        </div>
    )
}

export default ItemList