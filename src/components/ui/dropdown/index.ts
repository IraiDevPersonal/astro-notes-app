export * from "./dropdown";
export * from "./dropdown-content";
export * from "./dropdown-trigger";
export * from "./dropdown-context";
export * from "./dropdown-item";

import { Dropdown as DropdownComponent } from "./dropdown";
import { DropdownContent } from "./dropdown-content";
import { DropdownTrigger } from "./dropdown-trigger";
import { DropdownItem } from "./dropdown-item";

const Dropdown = Object.assign(DropdownComponent, {
  Content: DropdownContent,
  Trigger: DropdownTrigger,
  Item: DropdownItem,
});

export { Dropdown };
