// import omit from "lodash.omit"
// import jwt from "jsonwebtoken"
// import { HttpStatusCode, sendError, sendErrorServerInterval, sendSucces } from "../helper/client.js"
// import User from "../model/user.model.js"
// import config from "../../config/default.js"

// /**
//  * @route POST /api/auth/register
//  * @description
//  */
// export async function userRegisterController(req, res) {
//     try {
//         const user = await User.create(req.body)
        
//         return sendSucces(
//             res,
//             "user register successfully.",
//             omit(user.toJSON(), "password")
//         )
//     } catch (error) {
//         console.log(error)
//         sendErrorServerInterval(res)
//     }
// }

// export async function userLoginController(req, res) {
//     const { password, email } = req.body
//     console.log(email, password)
//     try {
//         let validatePassword = true 
//         const user = await User.findOne({ email })

//         if (!user) {
//             validatePassword = false
//         } else {
//             validatePassword = await user.comparePassword(password)
//         }

//         if (!validatePassword) {
//             return sendError(
//                 res,
//                 HttpStatusCode.UNAUTHORIZED,
//                 'email or password is wrong.'
//             )
//         }

//         // create access token
//         const accessToken = await jwt.sign(
//             {user: user._id},
//             config.jwtSecretKey,
//             {expiresIn: config.accessTokenTtl}
//         )

//         return sendSucces(
//             res,
//             'user login successfully.',
//             {
//                 user: omit(user.toJSON(), "password"),
//                 accessToken 
//             }
//         )
//     } catch (error) {
//         console.log(error)
//         sendErrorServerInterval(res)
//     }
// }