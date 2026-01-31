import z from "zod";

const getHotelDetailsSchema = z.object({
  hotelId: z.uuid(),
});

export { getHotelDetailsSchema };
