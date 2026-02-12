import { useFormAdapter } from "@/hooks/use-form-adapter";
import type { CreateNoteModel } from "../models/upsert-note.model";
import { createNoteService } from "../services/upsert-note.service";
import { createNoteSchema } from "../schemas/upsert-note.schema";

type UseCreateNoteOptions = {
  folderId?: string;
  isPinned?: boolean;
};

export function useCreateNote(
  onSubmitEffect?: () => void,
  options?: UseCreateNoteOptions,
) {
  const {
    isError,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useFormAdapter<CreateNoteModel>({
    defaultValues: {
      title: "",
      content: "",
    },
    schema: createNoteSchema,
  });

  const onSubmit = handleSubmit(async (values: CreateNoteModel) => {
    try {
      await createNoteService({ ...values, ...options });
      onSubmitEffect?.();
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  });

  return {
    errors,
    control,
    isError,
    register,
    onSubmit,
  };
}
