import { Dropdown } from "@/components/ui/dropdown";
import { EllipsisVertical, Link, Pin, Star, Trash } from "lucide-react";

export function NoteCardDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger size="icon-sm" variant={"secondary"}>
        <EllipsisVertical />
      </Dropdown.Trigger>
      <Dropdown.Content placement="left-start" className="w-48">
        <Dropdown.Item>
          <Link /> Ir
        </Dropdown.Item>
        <Dropdown.Item>
          <Pin /> Fijar
        </Dropdown.Item>
        <Dropdown.Item>
          <Star /> Favorito
        </Dropdown.Item>
        <Dropdown.Item>
          <Trash /> Eliminar
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
