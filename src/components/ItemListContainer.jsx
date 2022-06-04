
function ItemListContainer({ greeting }) {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 mt-5"> <h2>Bienvenidos a {greeting} </h2></div>
                <div className="col-4"></div>
            </div>
        </div>

    </>
}

export default ItemListContainer


