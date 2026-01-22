import { FormField } from "@/components/ui/field/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";

type FolderFormProps = {
  id: string;
  className?: string;
};

export function FolderForm({ className, id }: FolderFormProps) {
  const fieldNameId = useId();
  const fieldDescriptionId = useId();

  return (
    <form id={id} className={className}>
      <FormField id={fieldNameId} label="Nombre">
        <Input id={fieldNameId} />
      </FormField>

      <FormField id={fieldDescriptionId} label="Descripción">
        <Textarea id={fieldDescriptionId} />
      </FormField>
    </form>
  );
}
