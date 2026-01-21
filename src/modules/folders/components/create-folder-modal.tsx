import { Modal } from "@/components/ui/modal";

type CreateFolderModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CreateFolderModal(props: CreateFolderModalProps) {
  return (
    <Modal {...props}>
      <Modal.Overlay />
      <Modal.Content className="w-full max-w-2xl">
        <Modal.Header>
          <Modal.Title>Crear Carpeta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Description>Modal para crea carpetas</Modal.Description>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Cerrar</Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
