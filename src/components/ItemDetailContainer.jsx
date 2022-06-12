import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const getItems = new Promise((res) => {
    setTimeout(() => {
        res([
            {
                "id": "00",
                "title": "Final Fantasy XVI",
                "img": "https://live.staticflickr.com/65535/50542067131_762c2f45e2_o.png",
                "detail": "Prepárate para protagonizar la aventura fantástica definitiva, ahora en PC Windows.Canaliza el poder de tus ancestros en un sistema de batalla cargado de acción, proyéctate ágilmente por los aires en combates emocionantes y domina junto a tus compañeros las distintas armas, hechizos y ataques en equipo. Gracias a la última tecnología para PC Windows y la compatibilidad con monitores de alta resolución y HDR10, ahora podrás disfrutar como nunca antes de la experiencia de FINAL FANTASY XVI en un mundo hermoso y lleno de detalles.",
                "price": 5200,
                "stock": 60,
            }
        ]);
    }, 2000);
});

const ItemDeteailContainer = () => {
    const [itemDetail, setItemDetail] = useState();

    useEffect(() => {
        getItems.then((res) => {
            setItemDetail(res[0]);
        });
    }, []);
    return (
        <>
            {itemDetail === undefined ? (
                <p>loading</p>
            ) : (
                <ItemDetail id={itemDetail.id} title={itemDetail.title} img={itemDetail.img} detail={itemDetail.detail} price={itemDetail.price} stock={itemDetail.stock} />
            )}
        </>
    );
};

export default ItemDeteailContainer;