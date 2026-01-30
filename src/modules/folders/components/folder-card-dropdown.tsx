import { Dropdown } from "@/components/ui/dropdown";
import { EllipsisVertical, Link, Pin, Trash } from "lucide-react";

type FolderCardDropdownProps = {
  id: string;
};

export function FolderCardDropdown({ id }: FolderCardDropdownProps) {
  return (
    <Dropdown>
      <Dropdown.Trigger size="icon-xs" variant={"text"}>
        <EllipsisVertical />
      </Dropdown.Trigger>
      <Dropdown.Content placement="bottom-end" className="w-40">
        <Dropdown.Item href={`/folder/${id}`}>
          <Link /> Ir
        </Dropdown.Item>
        {/* <Dropdown.Divider /> */}
        <Dropdown.MenuTitle>acciones</Dropdown.MenuTitle>
        {/* <Dropdown.Divider /> */}
        <Dropdown.Item>
          <Pin /> Fijar
        </Dropdown.Item>
        <Dropdown.Item className="bg-danger/5 hover:bg-danger/15 text-danger/80 hover:text-danger">
          <Trash /> Eliminar
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
