import { postService } from "~/server/services/post";
import authMiddleware from "~/server/utils/auth";

export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw {
      statusCode: 500,
      statusMessage: "ID is required parameter.",
    };
  }

  const post = await postService.findById(Number(id));
  if (!post) {
    throw {
      statusCode: 500,
      statusMessage: "No post founded.",
    };
  }

  const deletedPost = await postService.delete(Number(id));

  if (!deletedPost) {
    throw {
      statusCode: 500,
      statusMessage: "Failed to delete post.",
    };
  }

  return deletedPost;
});
