import {useState, useEffect, useRef} from 'react'

function EditItem() {

    const [item, setItem] = useState(null);
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    const itemId = (window.location.href.split("/edit-item/")[1]);
    console.log(itemId);


    useEffect(() => {
        fetch("http://localhost:8080/view-item/" + itemId)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data); 
            setItem(data);
        })

    }, [])

    if(!item) {
        return "Loading...";
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(nameInputRef.current.value);
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const itemSubmitted = {
            id: item.id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }


        // TODO: api paring eraldi componenti
        // voiks olla eraldi loogika paringu jaoks JA
        // vormi jaoks
        fetch("http://localhost:8080/edit-item", {
            method: "PUT",
            body: JSON.stringify(itemSubmitted),
            headers: {'Content-type' : 'application/json'}
        })

    }
    
    return (
        <form onSubmit={formSubmitHandler}>
            <h1>Muuda eseme andmeid</h1>
            <label>Eseme nimi</label>
            <br/>
            <input type='text' defaultValue={item.name} required ref={nameInputRef}/>
            <br/>
            <label>Eseme hind</label>
            <br/>
            <input type='number' defaultValue={item.price} required ref={priceInputRef}/>
            <br/>
            <label>Eseme kategooria</label>
            <br/>
            <div className="custom-select">
                <select name="category" id="category" defaultValue={item.category} required ref={categoryInputRef}>
                    <option value="basic">Basic</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="premium">Premium</option>
                </select>
            </div>
            <br/>
            <button className="additemformbutton">Muuda</button>

            
        </form>
    )
}

export default EditItem
