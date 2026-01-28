import axios, { type AxiosResponse } from "axios";

type Result<T> = [string | null, T | null];

export async function safeAxios<T>(
  promise: Promise<AxiosResponse<T>>,
): Promise<Result<T>> {
  try {
    const { data } = await promise;
    return [null, data] as const;
  } catch (error) {
    let errorMessage = "Error no controlado";

    if (axios.isAxiosError<{ error: string }>(error)) {
      if (error.response) {
        errorMessage = error.response.data.error;
      }
    }

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return [errorMessage, null] as const;
  }
}
