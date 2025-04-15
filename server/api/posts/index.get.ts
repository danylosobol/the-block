import { postService } from "~/server/services/post";
import { IGetAllResponse, IQueryParams, ISafePost } from "~/types/interfaces";
import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const { search, page, size, args }: IQueryParams<string | undefined> =
    getQuery(event);

  let parsedArgs: Prisma.PostWhereInput = {};

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

  const posts: IGetAllResponse<ISafePost> = await postService.getAll(
    search,
    page,
    size,
    parsedArgs
  );

  if (!posts) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid or expired authentication token.",
    });
  }

  return posts;
});
