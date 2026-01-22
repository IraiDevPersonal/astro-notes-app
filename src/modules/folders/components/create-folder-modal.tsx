import { Modal } from "@/components/ui/modal";
import { FolderForm } from "./folder-form";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { Chip } from "@/components/ui/chip";

type CreateFolderModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateFolderModal(props: CreateFolderModalProps) {
  return (
    <Modal {...props}>
      <Modal.Overlay />
      <Modal.Content className="md:max-w-lg">
        <Modal.Header>
          <Modal.Title>Crear Carpeta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Modal.Description className="flex items-center">
            Crear carpeta en&nbsp;<Chip size={"sm"}>" / "</Chip>
          </Modal.Description>

          <FolderForm id="create-folder-form" />
        </Modal.Body>

        <Modal.Footer>
          <Modal.Close type="reset" form="create-folder-form">
            Cancelar
          </Modal.Close>

          <Button type="submit" form="create-folder-form">
            Guardar
            <Save />
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
