import {z} from 'zod'

export const createBookingSchema = z.object({
    roomId:z.string(),
    checkInDate:z.iso.datetime().transform(str=>new Date(str)),
    checkOutDate:z.iso.datetime().transform(str=>new Date(str)),
    guests:z.number()
}).strict()