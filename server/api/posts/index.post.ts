import validator from "validator";
import authMiddleware from "~/server/utils/auth";
import { postService } from "~/server/services/post";
import { IPostCreateInput } from "~/types/interfaces";

export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const {
    title,
    content = "",
    published = false,
    authorId,
    attachTaxes,
    featuredImage,
  }: IPostCreateInput = await readBody(event);

  if (!title || validator.isEmpty(title)) {
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

  const newPost = await postService.create({
    title,
    content,
    published,
    authorId: Number(authorId),
    featuredImage,
    attachTaxes,
  });

  if (!newPost) {
    throw {
      statusCode: 400,
      statusMessage: "Failed to create post.",
    };
  }

  return newPost;
});
