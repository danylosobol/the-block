import { PrismaClient } from "@prisma/client";
import { IApiError } from "~/types/interfaces";

export const client = {
  instance: () => new PrismaClient(),
  createError: (error: IApiError) => {
    throw error;
  },
};
