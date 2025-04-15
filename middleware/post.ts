import type { ISafePost } from "~/types/interfaces";
import { permissions } from "~/utils/permissions";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const { getById } = useCrud<ISafePost>("/api/posts");
  if (to && (to?.name === "posts-id" || to?.name === "posts-update-id")) {
    const postId = to.params.id;
    const { data: post } = await getById(Number(postId));
    if (!post.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page not found",
        fatal: true,
      });
    }

    const user = userStore.getCurrentUser;

    if (!permissions.posts.canViewPost(post.value, user)) {
      return navigateTo(from.fullPath === to.fullPath ? "/" : from.fullPath, {
        redirectCode: 301,
      });
    }

    if (
      to.name === "posts-update-id" &&
      !permissions.posts.canEditPost(post.value, user)
    ) {
      return navigateTo(from.fullPath === to.fullPath ? "/" : from.fullPath, {
        redirectCode: 301,
      });
    }
  }
});
