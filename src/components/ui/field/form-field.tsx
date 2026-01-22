import { HelperText } from "../helper-text";
import { Label } from "../label";
import { Field } from "./field";

type FormFieldProps = {
  id?: string;
  label: string;
  helperText?: string;
  children: React.ReactNode;
  classNames?: Partial<{
    root: string;
    label: string;
    helperText: string;
  }>;
};

export function FormField({
  id,
  label,
  children,
  helperText,
  classNames,
}: FormFieldProps) {
  return (
    <Field className={classNames?.root}>
      <Label htmlFor={id} className={classNames?.label}>
        {label}
      </Label>
      {children}
      <HelperText id={id} className={classNames?.helperText}>
        {helperText}
      </HelperText>
    </Field>
  );
}
