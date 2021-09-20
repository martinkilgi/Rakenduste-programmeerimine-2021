import './AddItemForm.css';
import {useRef, useState} from 'react';

function AddCategoryForm(props) {

    const nameInputRef = useRef();
    const typeInputRef = useRef();


    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const typeValue = typeInputRef.current.value;
    

        const category = {
            name: nameValue,
            type: typeValue
            
        }


        props.onAddCategory(category);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label>
            <br/>
            <input type='text' placeholder='Nimi' required ref={nameInputRef}/>
            <br/>
            <label>Kategooria tyyp</label>
            <br/>
            <input type='text' placeholder='Tyyp' required ref={typeInputRef}/>
            <br/>
            <button>Sisesta uus kategooria</button>
        </form>
    )
}

export default AddCategoryForm;