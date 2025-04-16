import { type User } from "~/src/generated/prisma";
import { type ISafeUser } from "~/types/interfaces";
import sanitizeHtml from "sanitize-html";

export const transformer = {
  user: (data: User): ISafeUser => {
    const { passwordHash, ...user } = data;
    return {
      ...user,
      created_at: new Date(data.created_at),
    };
  },
  cleanHtml: (dirty: string): string =>
    sanitizeHtml(dirty, {
      allowedTags: ["p", "strong", "em", "a", "h1", "h2", "h3", "h4", "h5"],
      allowedAttributes: {
        a: ["href", "name", "target"],
      },
    }),
};
