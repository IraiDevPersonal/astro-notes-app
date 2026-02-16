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
    return await this.safeRequest(
      this.client.get<T>(endpoint, options),
      options?.mapper,
    );
  };

  public post = async <T>(
    endpoint: string,
    data: unknown,
    options?: RequestConfig<T>,
  ) => {
    return await this.mapData(
      this.client.post<T>(endpoint, data, options),
      options?.mapper,
    );
  };

  public put = async <T>(
    endpoint: string,
    data: unknown,
    options?: RequestConfig<T>,
  ) => {
    return await this.mapData(
      this.client.put<T>(endpoint, data, options),
      options?.mapper,
    );
  };

  public patch = async <T>(
    endpoint: string,
    data: unknown,
    options?: RequestConfig<T>,
  ) => {
    return await this.mapData(
      this.client.patch<T>(endpoint, data, options),
      options?.mapper,
    );
  };

  public delete = async <T>(endpoint: string, options?: RequestConfig<T>) => {
    return await this.safeRequest(
      this.client.delete<T>(endpoint, options),
      options?.mapper,
    );
  };

  private safeRequest = async <T>(
    promise: Promise<AxiosResponse<T>>,
    mapper?: (raw: unknown) => T,
  ): Promise<[error: string | null, data: T | null]> => {
    try {
      const { data } = await promise;
      return [null, this.mapData(data, mapper)] as const;
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

  private mapData = <T>(data: unknown, mapper?: (raw: unknown) => T) => {
    return mapper ? mapper(data) : (data as any);
  };
}
