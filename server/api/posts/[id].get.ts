import { postService } from "~/server/services/post";

export default defineEventHandler(async (event) => {
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

  return post;
});
