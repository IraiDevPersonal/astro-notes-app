import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type CreateAxiosDefaults,
} from "axios";

export class HttpClient {
  private readonly instance: AxiosInstance;

  constructor(options?: CreateAxiosDefaults) {
    this.instance = axios.create(options);
  }

  public get = async <T>(endpoint: string, options?: AxiosRequestConfig) => {
    return await this.safeRequest(this.instance.get<T>(endpoint, options));
  };

  public post = async <T>(
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => {
    return await this.safeRequest(
      this.instance.post<T>(endpoint, data, options),
    );
  };

  public put = async <T>(
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => {
    return await this.safeRequest(
      this.instance.put<T>(endpoint, data, options),
    );
  };

  public patch = async <T>(
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => {
    return await this.safeRequest(
      this.instance.patch<T>(endpoint, data, options),
    );
  };

  public delete = async <T>(endpoint: string, options?: AxiosRequestConfig) => {
    return await this.safeRequest(this.instance.delete<T>(endpoint, options));
  };

  private safeRequest = async <T>(
    promise: Promise<AxiosResponse<T>>,
  ): Promise<[erro: string | null, data: T | null]> => {
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
  };
}
