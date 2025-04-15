import { IApiError, IResetInput } from "~/types/interfaces";
import { authService } from "~/server/services/auth";
import validator from "validator";

export default defineEventHandler(async (event) => {
  const data: IResetInput = await readBody(event);
  if (!data.email || !validator.isEmail(data.email)) {
    throw {
      statusCode: 400,
      statusMessage: "Invalid email format.",
    };
  }
  if (
    !data.endpoint ||
    !validator.isURL(data.endpoint, {
      require_tld: false,
      allow_underscores: true,
      require_protocol: true,
    })
  ) {
    throw {
      statusCode: 400,
      statusMessage: "Invalid endpoint format.",
    };
  }
  try {
    const result = await authService.reset(data);
    return result;
  } catch (error) {
    const apiError = error as IApiError;
    throw createError({
      statusCode: apiError.statusCode ?? 500,
      statusMessage: apiError.statusMessage ?? "Failed to reset password.",
    });
  }
});
