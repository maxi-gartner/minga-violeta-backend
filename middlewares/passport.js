import passport from "passport"
import passportJwt from "passport-jwt"
// import Auth from "../models/Auth.js"
import User from "../models/User.js"


passport.use(
    new passportJwt.Strategy({
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(), //define estrategia
        secretOrKey: process.env.SECRET
    },				
    async (jwt_payload,done) => {
        //console.log("jwt_payload", jwt_payload);
        try {				
            let user = await User.findOne({_id:jwt_payload.id})
            if (user) {		
                return done(null, user)
            } else {
                return done(null, false)
            }
        } catch (error) {
            console.log(error)
            return done(error,false)
        }
    }
))

export default passport