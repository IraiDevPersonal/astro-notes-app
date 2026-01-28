import { Editor } from "@tiptap/react";

export const isMac =
  typeof window !== "undefined"
    ? /Mac|iPhone|iPad|iPod/.test(navigator.platform)
    : false;

// Función helper para formatear shortcuts (copiada de tiptap-utils)
export function parseShortcutKeys(params: {
  shortcutKeys: string;
  keyName?: string;
}): string {
  const { shortcutKeys, keyName } = params;

  if (!shortcutKeys) return "";

  return shortcutKeys
    .split("-")
    .map((key) => {
      const lowerKey = key.toLowerCase();

      // Mapear teclas según el sistema operativo
      if (lowerKey === "mod") {
        return isMac ? "⌘" : "Ctrl";
      }
      if (lowerKey === "ctrl") {
        return isMac ? "⌃" : "Ctrl";
      }
      if (lowerKey === "shift") {
        return "Shift";
      }
      if (lowerKey === "alt") {
        return isMac ? "⌥" : "Alt";
      }
      if (lowerKey === "cmd") {
        return "⌘";
      }

      // Capitalizar primera letra para otras teclas
      return keyName ?? key.charAt(0).toUpperCase() + key.slice(1);
    })
    .join(" + ");
}

// Helper para obtener shortcut de una extensión
export function getExtensionShortcut(
  editor: Editor,
  extensionName: string,
  action?: string,
): string {
  try {
    const extension = editor.extensionManager.extensions.find(
      (ext) => ext.name === extensionName,
    );

    if (!extension) return "";

    // Obtener los keyboard shortcuts de la extensión
    const shortcuts = extension.options?.addKeyboardShortcuts?.call(extension);

    if (!shortcuts) return "";

    // Para acciones específicas como undo/redo
    if (action) {
      const shortcutKey = Object.keys(shortcuts).find((key) =>
        shortcuts[key].toString().includes(action),
      );
      return shortcutKey || "";
    }

    // Retornar el primer shortcut disponible
    return Object.keys(shortcuts)[0] || "";
  } catch (e) {
    return "";
  }
}
