import Item from "./Item"

function ItemList({juegos, onAdd, sumarCarrito}){

    return(
        <div className=" d-flex flex-wrap">
          {juegos?.map((juego)=>{
                return <Item id={juego.id} nombre={juego.name} imagen={juego.background_image} key={juego.id} inicial={1} max={10} onAdd={onAdd} agregarCantidad={sumarCarrito} />
            })}
        </div>
    )
}

export default ItemList