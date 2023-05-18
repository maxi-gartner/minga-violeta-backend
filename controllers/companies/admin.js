import Company from '../../models/Company.js'

let admin = async(req, res, next)=> {
    try {
        let all = await Company.find()
        return res.status(200)
        .json({
            companies: all
        })
    } catch (error) {
        return res.status(400)
        .json({
            error: 'An error has ocurred'
        })
    }
}

export default admin