import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: "string", required: true},
    color: {type: "string", required: true},
    hover: {type: "string", required: true},
    description: {type: "string", required: true},
    cover_photo: {type: "string", required: true},
    character_photo: {type: "string", required: true}
},{
    timestamps: true,
})
let collection = 'companies'

let Category = mongoose.models(schema,collection)
export default Category