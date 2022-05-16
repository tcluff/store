import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import image from '../../images/fiveonthefloor-trnasparent.webp';

const ItemLink = () => {
    return (
        <Link to="/viewItem/1234">
            <div className='link-container'>
                <div className='store-link-img-container'>
                    {image ? 
                        <img src={image} alt="store logo" className='store-link-img' />
                    :
                        <p>
                            Loading...
                        </p>
                    }
                </div>
                <div>
                    <p style={{ marginLeft: '.5em' }}>
                        <b>Item Name</b>
                    </p>
                    <p className='store-link-text'>
                        <em>Soft T Shirt</em>
                    </p>
                    <p className='store-link-text'>
                        Price: 20.99
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ItemLink