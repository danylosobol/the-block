import { useAuth } from "~/composables/useAuth";

export default defineEventHandler(async (event) => {
  const { setToken } = useAuth();

  setToken(event, "", -1);

  return true;
});
