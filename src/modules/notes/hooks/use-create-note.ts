import { useFormAdapter } from "@/hooks/use-form-adapter";
import { revalidate } from "@/lib/revalidate";
import { actions } from "astro:actions";
import type { CreateNoteModel } from "../models/upsert-note.model";
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
    control,
    isError,
    register,
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
    const { error, data } = await actions.notes.create({
      ...values,
      ...options,
    });

    if (error) {
      alert(error);
      return;
    }

    console.log(data);

    onSubmitEffect?.();
    revalidate();
  });

  return {
    errors,
    control,
    isError,
    register,
    onSubmit,
  };
}
