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

    headers?.forEach((value, key) => {
      this.headers.append(key, value);
      if (this.headers.has(key)) {
        this.headers.set(key, value);
      }
    });
  }

  get = async <T>(endpoint: string, options?: GetOptions): Promise<T> => {
    const url = this.baseUrl.concat(endpoint);
    const urlWithFilters = this.applyFilters(url, options?.filters);

    const response = await this.client(urlWithFilters, {
      method: "GET",
      headers: { ...this.headers, ...options?.headers },
    });

    return (await response.json()) as Promise<T>;
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
