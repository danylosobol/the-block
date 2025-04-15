import { fileService } from "~/server/services/file";
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

  try {
    await deleteFile(id);
  } catch (error) {
    throw {
      statusCode: 500,
      statusMessage: "Failed to delete file in storage.",
    };
  }

  const result = await fileService.delete(id);

  if (!result) {
    throw {
      statusCode: 500,
      statusMessage: "Failed to delete file in database.",
    };
  }

  return result;
});
