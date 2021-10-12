import "../css/Categories.css"

import React from 'react'
import {useState, useEffect} from 'react'
import CategoryList from '../components/CategoryList';
import {Link} from 'react-router-dom';

function Categories() {

    const [loadedCategories, setLoadedCategories] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/categories").then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setLoadedCategories(data);
        })

    }, [])


    return (
        <div className="categories">
            <h1>Kategooriad</h1>
            <hr />
            <CategoryList categories={loadedCategories}/>
            <Link to='/addcategory'>
                <button className="addcategorybutton">Lisa uus kategooria</button>
            </Link>
        </div>
    )
}

export default Categories
