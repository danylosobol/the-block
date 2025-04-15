import type { ISafePost, ISafeUser } from "~/types/interfaces";

const posts = {
  canViewPost: (post: ISafePost, user: ISafeUser | null): boolean => {
    if (post.published) return true;

    if (user && user.id === post.authorId) return true;

    return false;
  },

  canEditPost: (post: ISafePost, user: ISafeUser | null): boolean => {
    if (user && user.id === post.authorId) return true;

    return false;
  },
};

export const permissions = {
  posts,
};
