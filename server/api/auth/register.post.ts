import { IApiError, IRegisterInput } from "~/types/interfaces";
import { authService } from "~/server/services/auth";
import validator from "validator";
import { transformer } from "~/utils/transformer";

export default defineEventHandler(async (event) => {
  const data: IRegisterInput = await readBody(event);

  if (!data.email || !validator.isEmail(data.email)) {
    throw {
      statusCode: 400,
      statusMessage: "Invalid email format.",
    };
  }

  if (!data.name || validator.isEmpty(data.name)) {
    throw {
      statusCode: 400,
      statusMessage: "Name is required.",
    };
  }

  if (!data.password || !validator.isStrongPassword(data.password)) {
    throw {
      statusCode: 400,
      statusMessage:
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }

  if (
    !data.confirmPassword ||
    !validator.equals(data.password, data.confirmPassword)
  ) {
    throw {
      statusCode: 400,
      statusMessage: "Passwords do not match.",
    };
  }

  try {
    const user = await authService.register(data);
    return transformer.user(user);
  } catch (error) {
    const apiError = error as IApiError;
    throw createError({
      statusCode: apiError.statusCode ?? 500,
      statusMessage: apiError.statusMessage ?? "Failed to register.",
    });
  }
});
