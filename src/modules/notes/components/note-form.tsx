import { FormField } from "@/components/ui/field/form-field";
import { Input } from "@/components/ui/input";
import { TextEditor } from "@/components/ui/text-editor/text-editor";
import { useId } from "react";

export function NoteForm() {
  const titleId = useId();
  const contentId = useId();
  return (
    <form className="space-y-2">
      <FormField id={titleId} label="Titulo">
        <Input autoFocus />
      </FormField>

      <FormField id={contentId} label="Contenido">
        <TextEditor />
      </FormField>
    </form>
  );
}
