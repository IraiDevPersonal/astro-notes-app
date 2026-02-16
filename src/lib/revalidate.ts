import { navigate, type Options } from "astro:transitions/client";

export function revalidate(href?: string, options?: Options) {
  const currentPath = href || window.location.pathname;
  navigate(currentPath, { history: "replace", ...options });
}
