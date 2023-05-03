import { Schema, model, Types } from "mongoose"

let schema = new Schema({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    website: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, required: true},
    user_id: {type: Types.ObjectId, ref: 'users'/* , required: true */}
},{
    timestamps: true,
})
let collection = 'companies'

let Company = model(collection, schema)
export default Company