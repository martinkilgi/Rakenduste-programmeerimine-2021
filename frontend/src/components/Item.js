import "../css/Item.css"

function Item(props) {
    return (
        <div className="item">
            <div className="itemName">
                Nimi: {props.name}
            </div>
            <div className="itemPrice">
                Hind: {props.price}
            </div>
            <div className="itemCategory">
                Kategooria: {props.category}
            </div>
        </div>
    )
}

export default Item;