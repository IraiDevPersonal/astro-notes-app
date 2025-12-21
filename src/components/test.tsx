import { Plus } from "lucide-react";
import { Button } from "./button";
import { Chip } from "./chip";
import { Dropdown } from "./dropdown";
import { HelperText } from "./helper-text";
import { Input } from "./input";
import { Label } from "./label";
import { Modal } from "./modal";
import { ScrollArea } from "./scroll-area";
import { Select } from "./select";
import { Sidebar } from "./sidebar";
import { Textarea } from "./textarea";

export function Test() {
  return (
    <ScrollArea className="p-20 h-dvh space-y-4 w-full" as={"main"}>
      <h1>Notes App</h1>
      <Sidebar.Trigger />
      <div className="space-y-4">
        <Dropdown>
          <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
        <Modal>
          <Modal.Overlay />
          <Modal.Trigger>Modal</Modal.Trigger>
          <Modal.Content>
            <Modal.Header>Modal</Modal.Header>
            <Modal.Body>
              <p>Modal</p>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close>Close</Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </div>
      <Chip size="sm" variant="outline">
        <Plus />
        Outline
      </Chip>
      <Chip>
        <Plus />
        Default
      </Chip>
      <Chip size="lg" variant="success">
        <Plus />
        Success
      </Chip>
      <Chip size="lg" variant="danger">
        <Plus />
        Danger
      </Chip>
      <div>
        <Label htmlFor="textarea">Textarea</Label>
        <Textarea disabled fullWidth placeholder="Agregar Nota" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="input">Input</Label>
        <Input
          id="input"
          fullWidth
          placeholder="Agregar Nota"
          defaultValue="hola mundo"
        />
        <HelperText>Helper Text</HelperText>
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="input" error>
          {" "}
          Input{" "}
        </Label>
        <Input
          error
          id="input"
          fullWidth
          placeholder="Agregar Nota"
          defaultValue="hola mundo"
        />
        <HelperText error>Helper Text</HelperText>
      </div>
      <Input
        fullWidth
        placeholder="Agregar Nota"
        defaultValue="hola mundo"
        success
      />
      <div className="flex gap-2">
        <Input
          fullWidth
          placeholder="Agregar Nota"
          defaultValue="hola mundo"
          disabled
        />
        <Select
          fullWidth
          options={[
            { label: "Opcion 1", value: "1" },
            { label: "Opcion 2", value: "2" },
            { label: "Opcion 3", value: "3" },
          ]}
        />
      </div>
      <Button fullWidth>
        <Plus />
        Agregar Nota
      </Button>
      <Button variant={"danger"} fullWidth>
        <Plus />
        Agregar Nota
      </Button>
      <Button variant={"secondary"} fullWidth>
        <Plus />
        Agregar Nota
      </Button>
      <Button variant={"text"} fullWidth>
        <Plus />
        Agregar Nota
      </Button>
      <Button disabled variant={"text"} fullWidth>
        <Plus />
        Agregar Nota
      </Button>
    </ScrollArea>
  );
}
