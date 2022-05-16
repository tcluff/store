import { useState, useEffect } from 'react'
import ItemLink from './ItemLink';

const StoreHome = () => {

    const [items, setItems] = useState([1, 2, 3]);
    const [search, setSearch] = useState("");

    return (
        <div className="find-home-container">
            <h3>
                Find Custom Merch
            </h3>
            <input id='find-search-bar' placeholder='Search for an item' onChange={e => setSearch(e.target.value)} />
            <div className='store-links-container'>
                {items.map((item) => 
                    <ItemLink key={item} />
                )}
            </div>
        </div> 
    )
}

export default StoreHome