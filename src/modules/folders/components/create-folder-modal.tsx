import { Modal } from "@/components/ui/modal";
import { FolderForm } from "./folder-form";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { Chip } from "@/components/ui/chip";

const CREATE_FOLDER_FORM_ID = "create-folder-form";

type CreateFolderModalProps = {
  onOpenChange: (open: boolean) => void;
  isPinned?: boolean;
  folderId?: string;
  open: boolean;
};

export function CreateFolderModal({
  onOpenChange,
  open,
  ...props
}: CreateFolderModalProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Overlay />
      <Modal.Content className="md:max-w-lg">
        <Modal.Header>
          <Modal.Title>Crear Carpeta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Modal.Description className="flex items-center">
            Crear carpeta en&nbsp;<Chip size={"sm"}>" / "</Chip>
          </Modal.Description>

          <FolderForm
            onSubmitEffect={() => onOpenChange(false)}
            id={CREATE_FOLDER_FORM_ID}
            {...props}
          />
        </Modal.Body>

        <Modal.Footer>
          <Modal.Close>Cancelar</Modal.Close>

          <Button type="submit" form={CREATE_FOLDER_FORM_ID}>
            Guardar
            <Save />
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
