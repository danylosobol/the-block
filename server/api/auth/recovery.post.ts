import { IApiError, IRecoveryInput } from "~/types/interfaces";
import { authService } from "~/server/services/auth";
import validator from "validator";

export default defineEventHandler(async (event) => {
  const data: IRecoveryInput = await readBody(event);
  if (!data.token || validator.isEmpty(data.token)) {
    throw {
      statusCode: 400,
      statusMessage: "Reset token is required.",
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
    const result: boolean = await authService.recovery(data);
    return result;
  } catch (error) {
    const apiError = error as IApiError;
    throw createError({
      statusCode: apiError.statusCode ?? 500,
      statusMessage: apiError.statusMessage ?? "Failed to set a new password.",
    });
  }
});
