import { userService } from "~/server/services/user";
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

  const user = userService.findById(Number(id));

  if (!user) {
    throw {
      statusCode: 404,
      statusMessage: "User not found.",
    };
  }

  const deleteUser = await userService.delete(Number(id));
  if (!deleteUser) {
    throw {
      statusCode: 500,
      statusMessage: "Failed to delete user.",
    };
  }
  return deleteUser;
});
