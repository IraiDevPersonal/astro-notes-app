import { FormField } from "@/components/ui/field/form-field";
import { Input } from "@/components/ui/input";
import { TextEditor } from "@/components/ui/text-editor/text-editor";
import { useId } from "react";
import { useCreateNote } from "../hooks/use-create-folder";
import { Controller } from "react-hook-form";

type NoteFormProps = {
  id?: string;
  onSubmitEffect?: () => void;
};

export function NoteForm({ onSubmitEffect, id }: NoteFormProps) {
  const titleId = useId();
  const contentId = useId();
  const { register, errors, isError, onSubmit, control } =
    useCreateNote(onSubmitEffect);

  return (
    <form className="space-y-2" onSubmit={onSubmit} id={id}>
      <FormField
        id={titleId}
        label="Titulo"
        error={isError("title")}
        helperText={errors.title?.message}
      >
        <Input autoFocus {...register("title")} />
      </FormField>

      <FormField
        id={contentId}
        label="Contenido"
        error={isError("content")}
        helperText={errors.content?.message}
      >
        <Controller
          control={control}
          name="content"
          render={({ field }) => (
            <TextEditor value={field.value} onValueChange={field.onChange} />
          )}
        />
      </FormField>
    </form>
  );
}
