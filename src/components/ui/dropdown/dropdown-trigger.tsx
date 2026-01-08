import { Button, type ButtonProps } from "../button";
import { useDropdownContext } from "./dropdown-context";

type DropdownTriggerProps = {
  children: React.ReactNode;
} & Pick<ButtonProps, "onClick" | "variant" | "size">;

export function DropdownTrigger({ onClick, ...props }: DropdownTriggerProps) {
  const { onOpenChange: setOpen, triggerRef } = useDropdownContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen();
    onClick?.(e);
  };
  return <Button ref={triggerRef} onClick={handleClick} {...props} />;
}
