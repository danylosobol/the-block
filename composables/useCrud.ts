import type { IGetAllResponse, IQueryParams } from "~/types/interfaces";

export function useCrud<T>(endpoint: string) {
  const getById = async (
    id: number
  ): Promise<{
    data: ComputedRef<T | null>;
    loading: ComputedRef<boolean>;
    error: Ref<unknown>;
  }> => {
    const { data, error, status } = await useFetch<T>(`${endpoint}/${id}`);

    return {
      data: computed(() => data.value as T | null),
      loading: computed(() => status.value === "pending"),
      error,
    };
  };

  const getMany = async <U>(
    baseParams?: IQueryParams<U>
  ): Promise<{
    data: ComputedRef<IGetAllResponse<T> | null>;
    loading: ComputedRef<boolean>;
    error: Ref<unknown>;
    refresh: Function;
  }> => {
    const { data, error, status, refresh } = await useFetch<IGetAllResponse<T>>(
      endpoint,
      {
        method: "GET",
        query: {
          ...baseParams,
        },
      }
    );

    return {
      data: computed(() => data.value ?? null),
      loading: computed(() => status.value === "pending"),
      error,
      refresh,
    };
  };

  return {
    getById,
    getMany,
  };
}
