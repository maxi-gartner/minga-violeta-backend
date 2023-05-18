import Author from '../../models/Author.js'

let admin = async(req, res, next) => {
    try {
        let all = await Author.find()
        return res.status(200)
        .json({
            authors: all
        })     
    } catch (error) {
        return res.status(400)
        .json({
            error: 'An error has ocurred'
        })
        
    }
}

export default admin