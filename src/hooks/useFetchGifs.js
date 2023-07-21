//Custom hooks - no es mas que una funcion
import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";
//EL hook dispara la re-renderizacion del componnete
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)
    }


    //Indicamos que cuando cambie el estado de nuestro compoennte solo se ejecuta una sola vez
    //pero si se vulve a cargar el componente de 0 si lo hara, no puederetornar promesas solo funciones
    useEffect(() => {
        getImages();
    }, [])

    //el retorno tiene que ser muy espeficifo
    return {
        images,
        isLoading
    }
}