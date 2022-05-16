import express from "express";
import mongoose from 'mongoose';
import Store from "../models/storeModel.js";
import gfsObject from '../db/loadGfs.js';

const uploadMiddleware = gfsObject.uploadMiddleware;
const deleteImage = gfsObject.deleteImage;
const gfs = gfsObject.gfs;

const router = express.Router();

router.post("/makeStore", uploadMiddleware, async (req, res) => {

    try {
        const id = req.file.id.toString();

        const store = new Store({
            name: req.get("name"),
            description: req.get("description"),
            owner: req.get("owner"),
            imageId: id
        });

        const storeNameExists = await Store.exists({ name: req.get("name") });
        const storeOwnerExists = await Store.exists({ owner: req.get("owner") });

        if (storeNameExists && storeOwnerExists) {
            deleteImage(req.file.id);
            res.send({ message: 2 });
        } else {
            store.save((err) => {
                if (err) {
                    console.log("Couldn't save office.")
                    res.send({ message: 1 })
                } else {
                    res.send({ message: 3 })
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.send({ message: 1 })
    }
});

router.get('/oneFile/:id', ({ params: { id } }, res) => {
    // if no id return error
    if (!id || id === 'undefined') return res.status(400).send('no image id');
    // if there is an id string, cast it to mongoose's objectId type
    const _id = new mongoose.Types.ObjectId(id);
    // search for the image by id
    gfs.stream.find({ _id }).toArray((err, files) => {
      if (!files || files.length === 0)
        return res.status(400).send('no files exist');
      // if a file exists, send the data
      gfs.stream.openDownloadStream(_id).pipe(res);
    }); 
  });

router.get("/searchStores", async (req, res) => {   
    try {
        let search = req.query.search;

        const stores = await Store.find({ name: {$regex: "^" + search, $options: "i"} });

        res.send(stores);
    } catch (error) {
        console.log(error);
        
        res.send({ message: 1 })
    }
});

export default router;