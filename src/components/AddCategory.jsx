import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState([])

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const obSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //el setCategori3es contiene categories, asi que podemos recorrerlas
        onNewCategory(inputValue.trim());
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => {
            obSubmit(event)
        }}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>

    )
}
