import { Modal } from "@/components/ui/modal";
import { NoteForm } from "./note-form";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { Chip } from "@/components/ui/chip";

const CREATE_NOTE_FORM_ID = "create-note-form";

type CreateNoteModalProps = {
  onOpenChange: (open: boolean) => void;
  folderId?: string;
  open: boolean;
};

export function CreateNoteModal(props: CreateNoteModalProps) {
  return (
    <Modal {...props}>
      <Modal.Overlay />
      <Modal.Content className="md:max-w-4xl">
        <Modal.Header>
          <Modal.Title>Crear Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body className="h-[calc(100dvh-10rem)]">
          <Modal.Description className="flex items-center">
            Crear nota en&nbsp;<Chip size={"sm"}>" / "</Chip>
          </Modal.Description>
          <NoteForm
            id={CREATE_NOTE_FORM_ID}
            folderId={props.folderId}
            onSubmitEffect={() => props.onOpenChange(false)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Cancelar</Modal.Close>
          <Button type="submit" form={CREATE_NOTE_FORM_ID}>
            Guardar
            <Save />
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
