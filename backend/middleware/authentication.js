// import jwt from "jsonwebtoken"
// import config from "../../config/default.js"
// import { HttpStatusCode, sendError } from "../helper/client.js"
// import User from "../model/user.model.js"

// export async function deserializeUser(req, res, next) {
//     const data = req.headers['authorization']
//     const accessToken = data?.split(" ")[1]

//     try {
//         const { payload } = jwt.verify(accessToken, config.jwtSecretKey, {
//             complete: true
//         })
//         const user = await User.findById(payload.user)

//         res.locals.user = user
//         return next()
//     } catch (error) {
//         console.log(error)
//         return sendError(
//             res,
//             HttpStatusCode.UNAUTHORIZED,
//             'Unathorized.'
//         )
//     }
// }

// export function requireUser(req, res, next) {
//     const { user } = res.locals
    
//     if (!user) {
//         return sendError(
//             res,
//             HttpStatusCode.UNAUTHORIZED,
//             'Unathorized.'
//         )
//     }
//     return next()
// }

// /**
//  * Verify access token 
//  * @returns middleware[]
//  */
// export default function authenticate() {
//     return [
//         deserializeUser,
//         requireUser
//     ]
// }