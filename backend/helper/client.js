// import { validationResult } from "express-validator"

// export const HttpStatusCode = {
//     SUCCESS: 200,
//     BAD_REQUEST: 400,
//     UNAUTHORIZED: 401,
//     FORBIDDEN: 403,
//     NOT_FOUND: 404,
//     INTERVAL_SERVER_ERROR: 500
// }

// export function sendSucces(res, message, data = null) {
//     let dataReponse = { success: true, message }

//     if (data) {
//         dataReponse.data = data
//     }
//     return res.status(HttpStatusCode.SUCCESS).json(dataReponse)
// }

// export function sendError(res, statusCode, message, error = null) {
//     let dataReponse = { success: false }
    
//     if (message) {
//         dataReponse.message = message
//     }
//     if (error) {
//         dataReponse.error = error
//     }
//     return res.status(statusCode).json(dataReponse)
// }

// export function sendErrorServerInterval(res) {
//     const dataReponse = {
//         success: false,
//         message: 'Error Server Interval.'
//     }

//     return res.status(HttpStatusCode.INTERVAL_SERVER_ERROR).json(dataReponse)
// }