import { useState, useEffect } from 'react'
import StoreLink from './StoreLink';

const FindHome = () => {

    const [stores, setStores] = useState([]);
    const [search, setSearch] = useState("");

    const fetchStores = async () => {
        const res = await fetch(`http://localhost:3001/store/searchStores?search=${search}`);

        const data = await res.json();

        return data
    };

    useEffect(() => {
        const getStores = async () => {
            const storesFromServer = await fetchStores();

            setStores(storesFromServer)
        };

        getStores();
    }, [search]);

    return (
        <div className="find-home-container">
            <h3>
                Find a Store to Shop in
            </h3>
            <input id='find-search-bar' placeholder='Search for a store' onChange={e => setSearch(e.target.value)} />
           {stores.length === 0 ?
                <div style={{ marginTop: '5em' }}>
                    <h5>
                        No stores matched your search
                    </h5>
                </div>
           :
                <div className='store-links-container'>
                    {stores.map((store) => 
                        <StoreLink name={store.name} description={store.description} owner={store.owner} 
                        imageId={store.imageId} key={store._id} />
                    )}
                </div>}
        </div> 
    )
}

export default FindHome