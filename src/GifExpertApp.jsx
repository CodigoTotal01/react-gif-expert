//Despeust a de la version 17 de react ya no es neceario importar la biblioteca de react en todo lado
//Functional COmponent
//hace referencia a toda la pagina

import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //si la categoria lo tiene no lo agregara

        setCategories(cat => [newCategory, ...categories]);
    }

    return (
        <>
            {/*{Titulo}*/}
            <h1>GifExpertApp</h1>
            {/*{Input}*/}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
            {/*{gif item}*/}
        </>
    )
}