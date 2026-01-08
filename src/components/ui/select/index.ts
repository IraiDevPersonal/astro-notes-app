export * from "./select";
export * from "./option";

import { Select as SelectComponent } from "./select";
import { Option } from "./option";

const Select = Object.assign(SelectComponent, {
  Option,
});

export { Select };
