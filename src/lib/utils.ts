import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PortalPlacement } from "./types";

export function sleep(time: number = 500) {
  return new Promise((res) => setTimeout(() => res(true), time));
}

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

export function getPortalTransformOrigin(placement: PortalPlacement): string {
  const transformMap: Record<PortalPlacement, string> = {
    bottom: "translate(-50%, 0)",
    "bottom-start": "translate(0, 0)",
    "bottom-end": "translate(-100%, 0)",

    top: "translate(-50%, -100%)",
    "top-start": "translate(0, -100%)",
    "top-end": "translate(-100%, -100%)",

    right: "translate(0, -50%)",
    "right-start": "translate(0, 0)",
    "right-end": "translate(0, -100%)",

    left: "translate(-100%, -50%)",
    "left-start": "translate(-100%, 0)",
    "left-end": "translate(-100%, -100%)",
  };

  return transformMap[placement];
}

export function getPortalTransformOriginProperty(
  placement: PortalPlacement,
): string {
  const originMap: Record<PortalPlacement, string> = {
    bottom: "top center",
    "bottom-start": "top left",
    "bottom-end": "top right",

    top: "bottom center",
    "top-start": "bottom left",
    "top-end": "bottom right",

    right: "left center",
    "right-start": "left top",
    "right-end": "left bottom",

    left: "right center",
    "left-start": "right top",
    "left-end": "right bottom",
  };

  return originMap[placement];
}
