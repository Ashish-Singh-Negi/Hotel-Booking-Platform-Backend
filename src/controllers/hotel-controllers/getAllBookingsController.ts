import type { Request,Response } from "express"
import { errorResponse } from "../../utils/responses.js"
import { ERROR_CODES } from "../../utils/constants.js"

export const getAllBookingsController = async(req:Request,res:Response) =>{
    try {
        const status = req.query.status as string
        if(status){

        }
        
    } catch (error) {
        console.error('Error in getAllBookingsController \n')
        res.status(500).json(errorResponse(ERROR_CODES.INTERNAL_SERVER_ERROR))
    }

}