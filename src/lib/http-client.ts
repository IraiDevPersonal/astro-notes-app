import queryString from "query-string";

type FilterFormat = Record<string, any>;

type GetOptions = {
  headers?: HeadersInit; // Cambiado a HeadersInit para mejor compatibilidad
  filters?: FilterFormat;
};

export class HttpClient {
  private readonly baseUrl: string;
  private headers: Record<string, string> = {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem("token")}`,
  };

  constructor(baseUrl?: string, headers?: HeadersInit) {
    this.baseUrl = baseUrl ?? "";
    this.setHeaders(headers);
  }

  public get = async <T>(
    endpoint: string,
    options?: GetOptions,
  ): Promise<T> => {
    const url = this.buildUrl(endpoint);

    const response = await fetch(url, {
      method: "GET",
      headers: this.mergeHeaders(options?.headers),
    });

    if (!response.ok) {
      await this.throwError(response);
    }

    return (await response.json()) as Promise<T>;
  };

  public post = async <T>(
    endpoint: string,
    payload: object,
    options?: GetOptions,
  ): Promise<T> => {
    const url = this.buildUrl(endpoint);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: this.mergeHeaders(options?.headers),
    });

    if (!response.ok) {
      await this.throwError(response);
    }

    return (await response.json()) as Promise<T>;
  };

  private throwError = async (response: Response) => {
    const result = (await response.json()) as { error?: string } | undefined;
    throw new Error(result?.error ?? `HTTP Error ${response.status}`);
  };

  private setHeaders = (initHeaders?: HeadersInit) => {
    if (!initHeaders) return;

    if (initHeaders instanceof Headers) {
      initHeaders.forEach((value, key) => {
        this.headers[key] = value;
      });
    } else if (Array.isArray(initHeaders)) {
      initHeaders.forEach(([key, value]) => {
        this.headers[key] = value;
      });
    } else {
      Object.entries(initHeaders).forEach(([key, value]) => {
        this.headers[key] = value;
      });
    }
  };

  private mergeHeaders = (
    additionalHeaders?: HeadersInit,
  ): Record<string, string> => {
    if (!additionalHeaders) return this.headers;

    const merged = { ...this.headers };

    if (additionalHeaders instanceof Headers) {
      additionalHeaders.forEach((value, key) => {
        merged[key] = value;
      });
    } else if (Array.isArray(additionalHeaders)) {
      additionalHeaders.forEach(([key, value]) => {
        merged[key] = value;
      });
    } else {
      Object.assign(merged, additionalHeaders);
    }

    return merged;
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
