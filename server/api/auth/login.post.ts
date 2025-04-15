import { useAuth } from "~/composables/useAuth";
import { authService } from "~/server/services/auth";
import validator from "validator";
import { IApiError, ILoginInput, ILoginResponse } from "~/types/interfaces";
import { transformer } from "~/utils/transformer";

export default defineEventHandler(async (event) => {
  const data: ILoginInput = await readBody(event);
  const { setToken } = useAuth();

  if (!data.email || !validator.isEmail(data.email)) {
    throw {
      statusCode: 400,
      statusMessage: "Invalid email format.",
    };
  }

  if (!data.password || !validator.isStrongPassword(data.password)) {
    throw {
      statusCode: 400,
      statusMessage:
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    };
  }

  try {
    const { token, user }: ILoginResponse = await authService.login(data);

    const maxAge = data.rememberMe ? 30 * 24 * 60 * 60 : 60 * 60;
    setToken(event, token, maxAge);

    return {
      token,
      user: transformer.user(user),
    };
  } catch (error) {
    const apiError = error as IApiError;
    throw createError({
      statusCode: apiError.statusCode ?? 500,
      statusMessage: apiError.statusMessage ?? "Failed to login.",
    });
  }
});
