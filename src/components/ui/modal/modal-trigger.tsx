import { Button, type ButtonProps } from "../button";
import { useModalContext } from "./modal-context";

type ModalTriggerProps = {
  children: React.ReactNode;
} & Pick<
  ButtonProps,
  "variant" | "size" | "onClick" | "fullWidth" | "disabled"
>;

export function ModalTrigger({ children, ...props }: ModalTriggerProps) {
  const { onOpenChange } = useModalContext();

  return (
    <Button {...props} onClick={() => onOpenChange(true)}>
      {children}
    </Button>
  );
}
