import type { IApiError } from "~/types/interfaces";

export function useApi<T, E = IApiError>() {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<E | null>(null);

  const sendRequest = async (request: () => Promise<T>) => {
    loading.value = true;
    error.value = null;

    try {
      data.value = await request();
    } catch (err) {
      error.value = err as E;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, sendRequest };
}
