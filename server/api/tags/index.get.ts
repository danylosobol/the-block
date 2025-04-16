import { tagService } from "~/server/services/tag";
import { IQueryParams } from "~/types/interfaces";
import { Prisma } from "~/src/generated/prisma";

export default defineEventHandler(async (event) => {
  const { search, page, size, args }: IQueryParams<string | undefined> =
    getQuery(event);
  let parsedArgs: Prisma.TagWhereInput = {};

  if (args) {
    try {
      parsedArgs = JSON.parse(args);
    } catch (e) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid args format. Must be a JSON string.",
      });
    }
  }

  const tags = await tagService.getAll(search, page, size, parsedArgs);
  if (!tags) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid or expired authentication token.",
    });
  }
  return tags;
});
