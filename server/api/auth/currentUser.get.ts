import authMiddleware from "~/server/utils/auth";
import { User } from "@prisma/client";
import { transformer } from "~/utils/transformer";
import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const existedUser: User | null = await prisma.user.findUnique({
    where: { id: event.context.userId },
  });

  if (!existedUser) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid or expired authentication token.",
    });
  }
  return {
    ...transformer.user(existedUser),
  };
});
