import AddItemForm from "../components/AddItemForm";

function AddItem(props) {

    function itemSubmitHandler(item) {
        console.log(item);
        fetch('http://localhost:8080/items', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {'Content-type' : 'application/json'}
            
        });
    }

    return (
        <div>
           <h1>Lisa uus ese</h1>
           <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}

export default AddItem;