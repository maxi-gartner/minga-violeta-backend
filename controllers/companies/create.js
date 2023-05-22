import Company from '../../models/Company.js'

let create = async(req, res, next) => {
    try{
        let one = await Company.create(req.body)
        return res.status(201).json({
            company: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default create