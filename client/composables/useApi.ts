export const useApi = () => {
  const router = useRouter();

  const headers = (): Record<string, string> => {
    const token = localStorage.getItem("pb_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const api = async <T>(url: string, opts: Parameters<typeof $fetch>[1] = {}): Promise<T> => {
    try {
      return await $fetch<T>(url, {
        ...opts,
        headers: { ...headers(), ...(opts.headers as Record<string, string> ?? {}) },
      });
    } catch (e: unknown) {
      const err = e as { status?: number; statusCode?: number };
      if (err?.status === 401 || err?.statusCode === 401) {
        localStorage.removeItem("pb_token");
        router.replace("/auth/login");
      }
      throw e;
    }
  };

  const extractError = (e: unknown, fallback = "Bir hata oluştu."): string => {
    const err = e as { data?: { error?: string; message?: string } };
    return err?.data?.error ?? err?.data?.message ?? fallback;
  };

  return { api, extractError, headers };
};
