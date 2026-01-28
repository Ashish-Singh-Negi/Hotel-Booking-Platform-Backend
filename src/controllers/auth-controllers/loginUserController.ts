import type { Request, Response } from "express";
import { loginSchema } from "../../validations/auth.validation.js";
import { errorResponse } from "../../utils/responses.js";
import { ERROR_CODES } from "../../utils/constants.js";

export async function loginUserController(req: Request, res: Response) {
  // validate req body
  const parsedResult = loginSchema.safeParse(req.body);
  if (!parsedResult.success) {
    res.status(400).json(errorResponse(ERROR_CODES.INVALID_REQUEST));
    return;
  }

  const { email, password } = parsedResult.data;

  try {
  } catch (error) {
    console.error("Error while user login \n", error);
    return res
      .status(500)
      .json(errorResponse(ERROR_CODES.INTERNAL_SERVER_ERROR));
  }
}
