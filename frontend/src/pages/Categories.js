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
        <div>
            <Link to='/addcategory'>
                <button>Lisa uus kategooria</button>
            </Link>
            <CategoryList categories={loadedCategories}/>
        </div>
    )
}

export default Categories
