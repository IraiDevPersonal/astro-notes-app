import { type DropdownPlacement } from "./type";

export const DROPDOWN_CONTENT_GAP = 4;

export function getTransformOrigin(placement: DropdownPlacement): string {
  const transformMap: Record<DropdownPlacement, string> = {
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

export function getTransformOriginProperty(
  placement: DropdownPlacement
): string {
  const originMap: Record<DropdownPlacement, string> = {
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
