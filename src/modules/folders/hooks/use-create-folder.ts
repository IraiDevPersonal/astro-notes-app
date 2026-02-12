import { useFormAdapter } from "@/hooks/use-form-adapter";
import type { CreateFolderModel } from "../models/upsert-folder.model";
import { createFolderSchema } from "../schemas/upsert-folder.schema";
import { createFolderService } from "../services/create-folder.service";

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
    try {
      await createFolderService({ ...values, ...options });
      onSubmitEffect?.();
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  });

  return {
    errors,
    isError,
    register,
    onSubmit,
  };
}
