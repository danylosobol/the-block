import { Prisma } from "@prisma/client";
import validator from "validator";
import { authService } from "~/server/services/auth";
import { userService } from "~/server/services/user";
import authMiddleware from "~/server/utils/auth";
import { IProfileUpdate } from "~/types/interfaces";
import { transformer } from "~/utils/transformer";

export default defineEventHandler(async (event) => {
  await authMiddleware(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw {
      statusCode: 500,
      statusMessage: "ID is required parameter.",
    };
  }

  const { name, password, confirmPassword }: IProfileUpdate = await readBody(
    event
  );

  const updateData: Prisma.UserUpdateInput = {};

  if (!name || validator.isEmpty(name)) {
    throw {
      statusCode: 400,
      statusMessage: "Name is required.",
    };
  }

  updateData.name = name;

  if (password) {
    if (!validator.isStrongPassword(password)) {
      throw {
        statusCode: 400,
        statusMessage:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      };
    }

    if (!confirmPassword || !validator.equals(password, confirmPassword)) {
      throw {
        statusCode: 400,
        statusMessage: "Passwords do not match.",
      };
    }

    const hashedPassword = await authService.hashPassword(password);

    updateData.passwordHash = hashedPassword;
  }

  const updatedUser = await userService.update(Number(id), updateData);

  if (!updatedUser) {
    throw {
      statusCode: 500,
      statusMessage: "Failed to update user.",
    };
  }

  return {
    ...transformer.user(updatedUser),
  };
});
