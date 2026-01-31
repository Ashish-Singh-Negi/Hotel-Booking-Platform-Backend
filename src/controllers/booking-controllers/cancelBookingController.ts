import type { Request,Response } from "express"
import { prisma } from "../../lib/prisma.js"
import { errorResponse, successResponse } from "../../utils/responses.js"
import { ERROR_CODES } from "../../utils/constants.js"

export const cancelBookingController = async(req:Request,res:Response)=>{
    
    const bookingId = req.params.bookingId as string
    const userId = req.user.id
    
    const booking = await prisma.booking.findFirst({
        where:{
            userId,
            id:bookingId 
        }
    })
    if(!booking){
        return res.status(403).json(errorResponse(ERROR_CODES.FORBIDDEN))
    }

    if(booking.status === 'cancelled'){
        res.status(400).json(errorResponse(ERROR_CODES.ALREADY_CANCELLED))
    }
    
    const bookingExists = await prisma.booking.findFirst({
        where:{
            id:bookingId 
        }
    })
    if(!bookingExists){
        return res.status(404).json(errorResponse(ERROR_CODES.BOOKING_NOT_FOUND))
    }

    const hoursUntilCheckIn = (booking.checkInDate.getTime() - Date.now()) / (1000 * 60 * 60)

    if(hoursUntilCheckIn<24){
        return res.status(400).json(errorResponse(ERROR_CODES.CANCELLATION_DEADLINE_PASSED))
    }

    await prisma.booking.update({
        where:{
            id:bookingId
        },
        data:{
            status:'cancelled',
            cancelledAt:new Date()
        }
    })
    
    return res.status(200).json(successResponse({
        id:booking.id,
        status:booking.status,
        cancelledAt:booking.cancelledAt
    }))
    
}