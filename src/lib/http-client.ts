import queryString from "query-string";

type FilterFormat = Record<string, any>;

type GetOptions = {
  headers?: Headers;
  filters?: FilterFormat;
};

export class HttpClient {
  private readonly client = fetch;
  private readonly baseUrl: string;
  private headers: Headers = new Headers({
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem("token")}`,
  });

  constructor(baseUrl?: string, headers?: Headers) {
    this.baseUrl = baseUrl ?? "";

    this.setHeaders(headers);
  }

  public get = async <T>(
    endpoint: string,
    options?: GetOptions,
  ): Promise<T> => {
    const url = this.buildUrl(endpoint);

    const response = await this.client(url, {
      method: "GET",
      headers: { ...this.headers, ...options?.headers },
    });

    return (await response.json()) as Promise<T>;
  };

  public post = async <T>(
    endpoint: string,
    payload: object,
    options?: GetOptions,
  ): Promise<T> => {
    const url = this.buildUrl(endpoint);

    const response = await this.client(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { ...this.headers, ...options?.headers },
    });

    return (await response.json()) as Promise<T>;
  };

  private setHeaders = (initHeaders?: Headers) => {
    initHeaders?.forEach((value, key) => {
      if (this.headers.has(key)) {
        this.headers.set(key, value);
      } else {
        this.headers.append(key, value);
      }
    });
  };

  private buildUrl = (endpoint: string, filters?: FilterFormat): string => {
    const completeUrl = this.baseUrl.concat(endpoint);
    return this.applyFilters(completeUrl, filters);
  };

  private applyFilters = (url: string, filters?: FilterFormat) => {
    if (filters) {
      const query = queryString.stringify(filters, {
        skipEmptyString: true,
        skipNull: true,
      });
      return `${url}?${query}`;
    }

    return url;
  };
}
