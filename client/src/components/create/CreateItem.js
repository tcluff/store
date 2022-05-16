import { useState } from 'react'
import axios from 'axios';

const CreateItem = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [owner, setOwner] = useState("");
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);

    const handleFileSelection = e => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    };

    const makeStore = async () => {
        const fileData = new FormData();
        fileData.append('image', image);

        try {
            const res = await axios.post(`http://localhost:3001/item/makeItem`, fileData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "name": name,
                    "description": description,
                    "owner": owner
                }
            });

            const data = await res.json();

            if (data.message === 1) {
                alert("Error")
            } else {
                alert("Office made")
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='create-store-container'>
            <h3>
                Add a new item
            </h3>
            <input placeholder='Item name' className='create-store-input' value={name} 
                onChange={e => setName(e.target.value)} />
            <input placeholder='Briefly describe the item' className='create-store-input' value={description}
                onChange={e => setDescription(e.target.value)} />
            <input placeholder='Price' className='create-store-input' value={owner}
                onChange={e => setOwner(e.target.value)} />
            <p>
                Upload an image for your store (max size 3mb, must be JPEG or PNG)
            </p>
            <div className="input-group mb-3" style={{ width: '50%' }}> 
                <input type="file" className="form-control" id="inputGroupFile01" onChange={handleFileSelection} />
            </div>
            <button className='btn btn-primary btn-block' onClick={() => makeStore()}>
                Make Store
            </button>
        </div>
    )
}

export default CreateItem