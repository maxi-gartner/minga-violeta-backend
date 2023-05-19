import Author from '../../models/Author.js'

let admin = async(req, res, next) => {
    try {
        let active = await Author.find({ active: true })
        let inactive = await Author.find({ active: false })
        return res.status(200)
        .json({
            authors: { active, inactive }
        });   
    } catch (error) {
        return res.status(400)
        .json({
            error: 'An error has ocurred'
        })
    }
}

export default admin