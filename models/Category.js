import { Schema, model, Types } from "mongoose"

let schema = new Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    hover: {type: String, required: true},
    description: {type: String, required: true},
    cover_photo: {type: String, required: true},
    character_photo: {type: String, required: true}
},{
    timestamps: true,
})
let collection = 'categories'

let Category = model(collection, schema)
export default Category