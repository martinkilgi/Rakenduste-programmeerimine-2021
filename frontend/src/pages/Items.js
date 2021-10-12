import "../css/Items.css"

import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from '../components/ItemList';
import {Link} from 'react-router-dom';

function Items() {

    const [loadedItems, setLoadedItems] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/items").then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setLoadedItems(data);
        })

    }, [])


    return (
        <div className="items">
            <h1>Esemed</h1>
            <hr />
            <ItemList items={loadedItems}/>
            <Link to='/additem'>
                <button className="additembutton">Lisa uus asi</button>
            </Link>
        </div>
    )
}

export default Items
