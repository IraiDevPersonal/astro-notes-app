import { Button, type ButtonProps } from "../button";
import { useModalContext } from "./modal-context";

type ModalTriggerProps = ButtonProps;

export function ModalTrigger({ children, ...props }: ModalTriggerProps) {
  const { onOpenChange } = useModalContext();

  return (
    <Button {...props} onClick={() => onOpenChange(true)}>
      {children}
    </Button>
  );
}
