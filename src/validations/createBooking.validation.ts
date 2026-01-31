import {z} from 'zod'

export const createBookingSchema = z.object({
    roomId:z.string(),
    checkInDate:z.iso.date().transform(str=>new Date(str)),
    checkOutDate:z.iso.date().transform(str=>new Date(str)),
    guests:z.number()
})
.strict()
.refine((data)=> data.checkOutDate>data.checkInDate)