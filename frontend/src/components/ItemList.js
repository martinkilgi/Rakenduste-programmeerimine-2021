import Item from '../components/Item';

function ItemList (props) {

    function deleteItem(itemId) {
        props.onDeleteItem(itemId);
    }

    return (
        <div>
            {props.items.map(item => (
                <Item key={item.key} id={item.id} name={item.name} price={item.price} category={item.category}
                isAddToCartButton={props.isAddToCart} deleteItem={deleteItem} />
            ))}
            
        </div>
    )

}

export default ItemList;