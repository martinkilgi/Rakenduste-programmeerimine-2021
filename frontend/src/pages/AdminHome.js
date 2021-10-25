//import "../css/Home.css"

import Item from '../components/Item'
import ItemList from '../components/ItemList.js'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function AdminHome() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    function makeDeleteRequest (itemId) {
        fetch("http://localhost:8080/delete-item/" + itemId, {
            method: "DELETE"}).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        })
    }


    useEffect(() => {
        fetch("http://localhost:8080/items").then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        })

    }, [])
    

    return (
        <div>
            <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems} />
        </div>
    )
}

export default AdminHome;