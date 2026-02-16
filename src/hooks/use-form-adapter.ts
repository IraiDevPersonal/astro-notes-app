import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "astro:schema";
import { useCallback } from "react";
import {
  useForm,
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
} from "react-hook-form";
type UseFormAdapterProps<TFieldValues extends FieldValues = FieldValues> = {
  schema?: z.ZodSchema;
} & Omit<UseFormProps<TFieldValues, any, TFieldValues>, "resolver">;

type UseFormAdapterReturn<TFieldValues extends FieldValues = FieldValues> =
  UseFormReturn<TFieldValues, any, TFieldValues> & {
    isError: (key: keyof TFieldValues) => boolean;
  };

export function useFormAdapter<TFieldValues extends FieldValues = FieldValues>({
  schema,
  ...props
}: UseFormAdapterProps<TFieldValues>): UseFormAdapterReturn<TFieldValues> {
  const form = useForm({
    ...props,
    resolver: schema ? zodResolver(schema as any) : undefined,
  });

  const isError = useCallback(
    (key: keyof TFieldValues) => {
      return !!form.formState.errors[key];
    },
    [form.formState.errors],
  );

  return { ...form, isError };
}
