import validator from "validator";
import { postService } from "~/server/services/post";
import { userService } from "~/server/services/user";
import authMiddleware from "~/server/utils/auth";
import { IPostUpdateInput } from "~/types/interfaces";

export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw {
      statusCode: 500,
      statusMessage: "ID is required parameter.",
    };
  }

  const {
    title,
    content = "",
    published = false,
    authorId,
    attachTaxes,
    featuredImage,
    dettachTaxes,
  }: IPostUpdateInput = await readBody(event);

  if (!title || validator.isEmpty(title as string)) {
    throw createError({
      statusCode: 500,
      statusMessage: "Title is required.",
    });
  }

  if (!authorId) {
    throw createError({
      statusCode: 500,
      statusMessage: "Author id is required.",
    });
  }

  const isUserExist = await userService.findById(Number(authorId));
  if (!isUserExist) {
    throw createError({
      statusCode: 500,
      statusMessage: "Author doesn't exist.",
    });
  }

  const updatePost = await postService.update(Number(id), {
    title,
    content,
    published,
    authorId: Number(authorId),
    attachTaxes,
    dettachTaxes,
    featuredImage,
  });

  if (!updatePost) {
    throw {
      statusCode: 500,
      statusMessage: "Failed to update post.",
    };
  }

  return updatePost;
});
