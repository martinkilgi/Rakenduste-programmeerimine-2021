import Item from '../components/Item'
import ItemList from '../components/ItemList.js'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/items").then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        })

    }, [])
    
    // if (isLoading) {
    //         return (
    //             <div>
    //                 Laeb....
    //             </div>
    //         )
    // }


    return (
        <div>
            Koduleht
            <Link to='/additem'>
                <button>Lisa uus ese</button>
            </Link>
            <Link to='categories'>
                <button>Vaata kategooriaid</button>
            </Link>
            <ItemList items={loadedItems} />
        </div>
    )
}

export default Home;