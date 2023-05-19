import Company from '../../models/Company.js'

let admin = async(req, res, next)=> {
    try {
        let active = await Company.find({ active: true })                           // Utilizo la sintaxis de try/catch para intentar algo y catchear los errores que puedan surgir 
        let inactive = await Company.find({ active: false })
        return res.status(200)
        .json({
            companies: { active, inactive }
        })
    } catch (error) {
        return res.status(400)
        .json({
            error: 'An error has ocurred'
        })
    }
}

export default admin