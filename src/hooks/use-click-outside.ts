import { useEffect } from "react";

export function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void,
  preventExecution?: boolean
) {
  useEffect(() => {
    if (preventExecution) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Verificar si el clic fue fuera de TODOS los elementos
      const isOutside = refs.every((ref) => {
        return ref.current && !ref.current.contains(target);
      });

      if (isOutside) {
        handler();
      }
    };

    // Usar setTimeout para evitar que el clic que abre el elemento lo cierre
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler, preventExecution]);
}
