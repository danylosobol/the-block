import { H3Event } from "h3";
import { useAuth } from "~/composables/useAuth";
import jwt, { JwtPayload } from "jsonwebtoken";

export default defineEventHandler(async (event: H3Event) => {
  const { getToken } = useAuth();
  const { jwtSecret } = useRuntimeConfig(event);
  const token = getToken(true, event);

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    if (!decoded.userId) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid token",
      });
    }
    event.context.userId = decoded.userId;
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid token",
    });
  }
});
