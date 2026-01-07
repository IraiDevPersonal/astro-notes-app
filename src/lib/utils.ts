import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function $<T extends HTMLElement = HTMLElement>(value: string): T {
  try {
    const el = document.getElementById(value);
    if (!el) {
      throw new Error(`Element with id "${value}" not found`);
    }
    return el as T;
  } catch (error) {
    throw error;
  }
}
