import { Modal } from "@/components/ui/modal";

type CreateNoteModalProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

export function CreateNoteModal(props: CreateNoteModalProps) {
  return (
    <Modal {...props}>
      <Modal.Overlay />
      <Modal.Content className="md:w-full md:max-w-2xl">
        <Modal.Header>
          <Modal.Title>Crear Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Description>Modal para crea notas</Modal.Description>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Cerrar</Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
