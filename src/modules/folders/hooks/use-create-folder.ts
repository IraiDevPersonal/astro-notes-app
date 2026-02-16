import { useFormAdapter } from "@/hooks/use-form-adapter";
import { revalidate } from "@/lib/revalidate";
import { actions } from "astro:actions";
import type { CreateFolderModel } from "../models/upsert-folder.model";
import { createFolderSchema } from "../schemas/upsert-folder.schema";

type UseCreateFolderOptions = {
  folderId?: string;
  isPinned?: boolean;
};

export function useCreateFolder(
  onSubmitEffect?: () => void,
  options?: UseCreateFolderOptions,
) {
  const {
    isError,
    register,
    handleSubmit,
    formState: { errors },
  } = useFormAdapter<CreateFolderModel>({
    defaultValues: {
      name: "",
      description: "",
    },
    schema: createFolderSchema,
  });

  const onSubmit = handleSubmit(async (values: CreateFolderModel) => {
    const { error } = await actions.folders.create({ ...values, ...options });

    if (error) {
      alert(error);
      return;
    }

    onSubmitEffect?.();
    revalidate();
  });

  return {
    errors,
    isError,
    register,
    onSubmit,
  };
}
