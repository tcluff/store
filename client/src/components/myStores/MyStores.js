import { useState } from 'react'
import { Link } from 'react-router-dom';

const MyStores = () => {

    const stores = ["First Test Store", "Second Test Store", "Third Test Store"];

    const [myStores, setMyStores] = useState(stores);

    return (
        <div className='my-stores-container'>
            <h3>
                Pick the store you want to update
            </h3>
            <div className='my-stores-list'>
                {stores.map((store) => 
                    <p key={store} style={{ cursor: 'pointer' }}>
                        {store}
                    </p>
                )}
            </div>
        </div>
    )
}

export default MyStores