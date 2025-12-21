import { Button, type ButtonProps } from "../button";
import { useModalContext } from "./modal-context";

type ModalCloseProps = {
  children: React.ReactNode;
} & ButtonProps;

export function ModalClose({ children, onClick, ...props }: ModalCloseProps) {
  const { onOpenChange } = useModalContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOpenChange(false);
    onClick?.(e);
  };

  return (
    <Button
      aria-label="Close modal"
      variant="secondary"
      {...props}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
