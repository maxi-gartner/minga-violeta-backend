import Manga from "../../models/Manga.js";

let read = async (req, res, next) => {
    let queries = {}
    console.log(req.query)
    if (req.query.title) {
        queries.title = new RegExp(req.query.title.trim(), "i")
    }
    if (req.query.category_id) {
        queries.category_id = req.query.category_id
    }

    console.log(queries)
    try {
        let all = await Manga.find(queries)
        return res.status(200).json({
            success: true,
            response: all
        })
    }catch (error) {
        next(error)
    }
}

export default read