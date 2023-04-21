import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    website: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, required: true},
    user_id: {type: mongoose.ObjectId, ref: 'users', required: true}
},{
    timestamps: true,
})
let collection = 'companies'

let Company = mongoose.models(schema,collection)
export default Company