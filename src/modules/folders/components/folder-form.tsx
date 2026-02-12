import { FormField } from "@/components/ui/field/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";
import { useCreateFolder } from "../hooks/use-create-folder";

type FolderFormProps = {
  onSubmitEffect?: () => void;
  isPinned?: boolean;
  className?: string;
  folderId?: string;
  id: string;
};

export function FolderForm({
  onSubmitEffect,
  className,
  isPinned,
  folderId,
  id,
}: FolderFormProps) {
  const fieldNameId = useId();
  const fieldDescriptionId = useId();

  const { errors, isError, onSubmit, register } = useCreateFolder(
    onSubmitEffect,
    { folderId, isPinned },
  );

  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      <FormField
        label="Nombre"
        id={fieldNameId}
        error={isError("name")}
        helperText={errors.name?.message}
      >
        <Input
          autoFocus
          id={fieldNameId}
          {...register("name")}
          error={isError("name")}
        />
      </FormField>

      <FormField
        label="Descripción"
        id={fieldDescriptionId}
        error={isError("description")}
        helperText={errors.description?.message}
      >
        <Textarea
          id={fieldDescriptionId}
          {...register("description")}
          error={isError("description")}
        />
      </FormField>
    </form>
  );
}
