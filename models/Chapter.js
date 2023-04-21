import { Schema, model, Types} from "mongoose"

let schema = new Schema ({
    manga_id: { type: Types.ObjectId, ref:'mangas' ,required: true},
    title: { type: String, required: true},
    cover_photo: { type: String, required: true},
    pages: [{ type: String, required: true}],
    order: { type: String, required: true},
},{
    timestamps: true,

})
let collection = 'chapters'

let Chapter = model(collection, schema)
export default Chapter