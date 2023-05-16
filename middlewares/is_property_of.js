import Manga from "../models/Manga.js";

async function isPropertyOf(req, res, next) {
  const manga_id = req.body.manga_id;
  const author_id = req.body.author_id;

  let manga = Manga.findOne({ _id: manga_id, author_id: author_id })
    try {
        if (manga) {
            return next();
        } 
        return res.status(400).json({
            success: false,
            message: "You do not have permission to create a chapter for this manga",
        });
      
    }
    catch(error) {
      next(error)
    };
}

export default isPropertyOf
