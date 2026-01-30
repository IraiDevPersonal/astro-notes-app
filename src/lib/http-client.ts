import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type CreateAxiosDefaults,
} from "axios";

type RequestConfig<T, D = any> = AxiosRequestConfig<D> & {
  mapper?: (raw: unknown) => T;
};

export class HttpClient {
  private readonly client: AxiosInstance;

  constructor(options?: CreateAxiosDefaults) {
    this.client = axios.create(options);
  }

  public get = async <T>(endpoint: string, options?: RequestConfig<T>) => {
    return await this.safeRequest(this.client.get<T>(endpoint, options));
  };

  public post = async <T>(
    endpoint: string,
    data: unknown,
    options?: RequestConfig<T>,
  ) => {
    return await this.safeRequest(this.client.post<T>(endpoint, data, options));
  };

  public put = async <T>(
    endpoint: string,
    data: unknown,
    options?: RequestConfig<T>,
  ) => {
    return await this.safeRequest(this.client.put<T>(endpoint, data, options));
  };

  public patch = async <T>(
    endpoint: string,
    data: unknown,
    options?: RequestConfig<T>,
  ) => {
    return await this.safeRequest(
      this.client.patch<T>(endpoint, data, options),
    );
  };

  public delete = async <T>(endpoint: string, options?: RequestConfig<T>) => {
    return await this.safeRequest(this.client.delete<T>(endpoint, options));
  };

  private safeRequest = async <T>(
    promise: Promise<AxiosResponse<T>>,
    mapper?: (raw: unknown) => T,
  ): Promise<[error: string | null, data: T | null]> => {
    try {
      const { data } = await promise;
      return [null, mapper ? mapper(data) : data] as const;
    } catch (error) {
      let errorMessage = "Error no controlado";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      if (axios.isAxiosError<{ error: string }>(error)) {
        if (error.response) {
          errorMessage = error.response.data.error;
        }
      }

      return [errorMessage, null] as const;
    }
  };
}
