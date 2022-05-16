import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const StoreLink = ({ name, description, owner, imageId }) => {

    const [image, setImage] = useState(null);

    const fetchImage = async () => {

        const res = await fetch(`http://localhost:3001/store/oneFile/${imageId}`);

        const blob = await res.blob();

        return [URL.createObjectURL(blob), null];
    }

    useEffect(() => {
        const getImage = async () => {
            const [response, error] = await fetchImage();

            if (error) {
                console.log(error);
            } else {
                console.log(response);
                setImage(response);
            }
        };

        getImage();
    }, []);

    return (
        <Link to={`storeHome/${name}`} className="link">
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
                    <p style={{ marginLeft: '.5em', color: 'black' }}>
                        <b>{name}</b>
                    </p>
                    <p className='store-link-text'>
                        <em>{description}</em>
                    </p>
                    <p className='store-link-text'>
                        Owned by: {owner}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default StoreLink