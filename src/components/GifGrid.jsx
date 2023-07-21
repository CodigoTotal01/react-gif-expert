//proptipe

import {useEffect, useState} from "react";

import {GifItem} from "./GifItem.jsx";

import {getGifs} from "../helpers/getGifs.js";
import {useFetchGifs} from "../hooks/useFetchGifs.js";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        //Fragment
        <>
            <h3>
                {category}

                {
                    //if corto con una condicion
                    isLoading && (<h2>Cargando...</h2>) // null no se renderiza ene react
                }

            </h3>
            {/*Palabra reservada class es para js pappi recuerda el archivo*/}
            <div className="card-grid">
                {
                    images.map((image) => (
                        // Exparciendo propiedades  del image - se envia como properties
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )
};

//El modo Stricto de react en desarrollo es bueno, ayuda a iddendtificador de erroresen cuanto la sitaxis de react en desarrollo
//EL modo estricto nos dicque todo se ejecute como deba ejecutarce,
// siempre que hay un cambio se consume neuvamente el url y estoi es innesesario