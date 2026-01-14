import { useEffect, type RefObject } from "react";

export function useLockScroll(
  listener: boolean,
  scrollableRef?: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    // Función para encontrar el ancestro con scroll más cercano
    const findScrollableParent = (element: HTMLElement | null): HTMLElement => {
      if (!element) return document.body;

      let parent = element.parentElement;

      while (parent) {
        const { overflow, overflowY, overflowX } =
          window.getComputedStyle(parent);
        const hasScroll =
          overflow === "auto" ||
          overflow === "scroll" ||
          overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowX === "auto" ||
          overflowX === "scroll";

        // Verificar si el elemento realmente tiene contenido scrollable
        const isScrollable =
          hasScroll &&
          (parent.scrollHeight > parent.clientHeight ||
            parent.scrollWidth > parent.clientWidth);

        if (isScrollable) {
          return parent;
        }

        parent = parent.parentElement;
      }

      return document.body;
    };

    // Determinar qué elemento bloquear
    const targetElement = scrollableRef?.current
      ? findScrollableParent(scrollableRef.current)
      : document.body;

    if (listener) {
      // Guardar el overflow original
      const originalOverflow = targetElement.style.overflow;
      targetElement.style.overflow = "hidden";

      // Restaurar al desmontar
      return () => {
        targetElement.style.overflow = originalOverflow;
      };
    } else {
      targetElement.style.overflow = "auto";
    }
  }, [listener, scrollableRef]);
}
