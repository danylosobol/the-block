import { Prisma } from "@prisma/client";
import validator from "validator";
import { tagService } from "~/server/services/tag";

export default defineEventHandler(async (event) => {
  const {
    name,
    slug,
    posts = undefined,
  }: Prisma.TagCreateInput = await readBody(event);
  if (!name || validator.isEmpty(name)) {
    throw {
      statusCode: 400,
      statusMessage: "Name is required.",
    };
  }

  if (!slug || validator.isEmpty(slug)) {
    throw {
      statusCode: 400,
      statusMessage: "Slug is required.",
    };
  }

  const exitedTag = await tagService.findBySlug(slug);
  if (exitedTag) {
    throw {
      statusCode: 400,
      statusMessage: "This tag is already exist.",
    };
  }

  const newTag = await tagService.create(name, slug);

  if (!newTag) {
    throw {
      statusCode: 400,
      statusMessage: "Failed to create tag.",
    };
  }

  return newTag;
});
