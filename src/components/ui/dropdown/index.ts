export * from "./dropdown";
export * from "./dropdown-content";
export * from "./dropdown-trigger";
export * from "./dropdown-context";
export * from "./dropdown-item";
export * from "./dropdown-divider";
export * from "./dropdown-menu-title";

import { Dropdown as DropdownComponent } from "./dropdown";
import { DropdownContent } from "./dropdown-content";
import { DropdownTrigger } from "./dropdown-trigger";
import { DropdownItem } from "./dropdown-item";
import { DropdownDivider } from "./dropdown-divider";
import { DropdownMenuTitle } from "./dropdown-menu-title";

const Dropdown = Object.assign(DropdownComponent, {
  MenuTitle: DropdownMenuTitle,
  Content: DropdownContent,
  Trigger: DropdownTrigger,
  Divider: DropdownDivider,
  Item: DropdownItem,
});

export { Dropdown };
