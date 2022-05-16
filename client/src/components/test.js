import { useState, useEffect } from 'react'
import axios from 'axios'

const Test = () => {

    const [image, setImage] = useState(null);

    const fetchImage = async () => {

        const res = await fetch("http://localhost:3001/store/oneFile/628022199514881469d56c7b");

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
        <div>
            <h1>
                Testing
            </h1>
            <img src={image} alt="No image yet" style={{ height: '10em', width: '25em' }} />
        </div>
    )
}

export default Test