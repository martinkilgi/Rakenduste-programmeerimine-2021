import { Link } from "react-router-dom";
import "../css/Item.css"

function Item(props) {

    function handleDelete(itemId) {
        props.deleteItem(itemId);
    }

    return (
        <div className="item">
            {props.isSingleItemView ? <div><div className="itemName">
                Nimi: {props.name}
                </div>
                <div className="itemPrice">
                    Hind: {props.price}
                </div>
                <div className="itemCategory">
                    Kategooria: {props.category}
                </div></div> : <div><Link to={`item/${props.id}`}>
                <div className="itemName">
                Nimi: {props.name}
                </div>
                <div className="itemPrice">
                    Hind: {props.price}
                </div>
                <div className="itemCategory">
                    Kategooria: {props.category}
                </div>
            </Link></div>}
            
            { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : <div>
                <button onClick={() => {handleDelete(props.id)}}>X</button>

                <Link to={`edit-item/${props.id}`}>
                    <button>Muuda</button>
                </Link>
            </div> }
        </div>
    )
}

export default Item;