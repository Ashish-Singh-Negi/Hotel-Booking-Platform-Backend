import z from "zod";

const addHotelReviewSchema = z
  .object({
    bookingId: z.string(),
    rating: z.number().positive().min(1).max(5),
    comment: z.string().trim().nonempty(),
  })
  .strict();

export { addHotelReviewSchema };
