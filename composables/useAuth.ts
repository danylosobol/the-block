import { H3Event } from "h3";

export function useAuth() {
  const setToken = (event: H3Event, token: string, maxAge: number): void => {
    if (!event) {
      return;
    }
    setCookie(event, "auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: maxAge,
      sameSite: "lax",
      path: "/",
      domain:
        process.env.NODE_ENV === "production" ? ".example.com" : undefined,
    });
  };

  const getToken = (server: boolean, event?: H3Event): string | null => {
    if (server && event) {
      return (
        getHeader(event, "Authorization")?.replace("Bearer ", "") ??
        getCookie(event, "auth_token") ??
        null
      );
    }

    return useCookie("auth_token").value ?? null;
  };

  return { setToken, getToken };
}
