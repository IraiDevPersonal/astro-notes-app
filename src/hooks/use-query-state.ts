import { useCallback, useState } from "react";

type Options = {
  defaultValue?: string;
};

export function useQueryState<T extends string>(key: T, options: Options = {}) {
  const [query, setQuery] = useState(() => {
    if (typeof window === "undefined") return options.defaultValue || null;
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(key) || options.defaultValue || null;
  });

  const setSearchState = useCallback((value: string | null) => {
    setQuery(value);
  }, []);

  const handleSearch = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.get(key) === query) return;

    if (query === null || query === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, query);
    }

    const newUrl = searchParams.toString()
      ? `${window.location.pathname}?${searchParams.toString()}`
      : window.location.pathname;

    window.location.href = newUrl;
  }, [query, key]);

  return {
    query,
    handleSearch,
    setQuery: setSearchState,
  };
}
