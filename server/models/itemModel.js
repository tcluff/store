import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxlength: 300 },
    price: { type: Number, required: true },
    imageId: { type: String },
    storeId: { type: String, required: true }
});

const storeDb = mongoose.connection.useDb("winnoStore");

const Item = storeDb.model('Item', itemSchema, 'items');

export default Item