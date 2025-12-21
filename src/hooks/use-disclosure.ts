import { useState } from "react";

export function useDisclosure(initialOpen?: boolean) {
  const [isOpen, setIsOpen] = useState(initialOpen ?? false);

  const handleOpenChange = (value?: boolean) => {
    setIsOpen((prev) => value ?? !prev);
  };

  return [isOpen, handleOpenChange] as const;
}
