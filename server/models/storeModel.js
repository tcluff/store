import mongoose from "mongoose";

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxlength: 300 },
    owner: { type: String, required: true },
    imageId: { type: String }
});

const storeDb = mongoose.connection.useDb("winnoStore");

const Store = storeDb.model('Store', storeSchema, 'stores');

export default Store