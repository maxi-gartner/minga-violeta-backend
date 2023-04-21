import { Schema,model, Types } from "mongoose"

let schema = new Schema({
    name: {type: "string", required: true},
    last_name: {type: "string", required: true},
    city: {type: "string", required: true},
    country: {type: "string", required: true},
    date: {type: "date", required: true},
    photo: {type: "string", required: true},
    active: {type: "boolean", required: true},
    user_id: {type: Types.ObjectId, ref: 'users', required: true}
},{
    timestamps: true,
}
)
let collection = 'authors'

let Author = model(schema,collection)
export default Author