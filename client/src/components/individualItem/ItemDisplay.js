import React from 'react'
import { useParams } from 'react-router-dom';
import image from '../../images/fiveonthefloor-trnasparent.webp';

const ItemDisplay = () => {

    const { itemId } = useParams();

    return (
        <div className='display-item-container'>
            <h3>
                Item name
            </h3>
            <div className='display-item-subcontainer'>
                <div className='display-item-half'>
                    <div className='display-item-image-container'>
                        <img src={image} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </div>
                </div>
                <div className='display-item-half'>
                    <p>
                        Full name of the item for sale
                    </p>
                    <p>
                        Description of the item for sale
                    </p>
                    <p>
                        Price: $20.99
                    </p>
                    <button className='btn btn-primary btn-block'>
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDisplay