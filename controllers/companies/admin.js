import Company from '../../models/Company.js'

let admin = async(req, res, next)=> {
    try {
        let all = await Company.find()
        all.sort((a, b) => {
            if (a.active === b.active) {
                return 0;
            } else if (a.active) {
                return 1;
            } else {
                return -1;
            }
        });
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