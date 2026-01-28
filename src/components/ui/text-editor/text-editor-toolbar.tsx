import { Editor, useEditorState } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  BoldIcon,
  Heading1,
  Heading2,
  Italic,
  List,
  ListOrdered,
  Minus,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import { ToolbarButton } from "./toolbar-button";
import { getExtensionShortcut, isMac, parseShortcutKeys } from "./utils";
import { SHORTCUTS } from "./constants";

export function TextEditorToolbar({ editor }: { editor: Editor }) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        toggleBold: () => ctx.editor.chain().focus().toggleBold().run(),
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        toggleItalic: () => ctx.editor.chain().focus().toggleItalic().run(),
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        toggleStrike: () => ctx.editor.chain().focus().toggleStrike().run(),
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        toggleHeading1: () =>
          ctx.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        toggleHeading2: () =>
          ctx.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        toggleBulletList: () =>
          ctx.editor.chain().focus().toggleBulletList().run(),
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        toggleOrderedList: () =>
          ctx.editor.chain().focus().toggleOrderedList().run(),
        setHorizontalRule: () =>
          ctx.editor.chain().focus().setHorizontalRule().run(),
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
        undo: () => ctx.editor.chain().focus().undo().run(),
        redo: () => ctx.editor.chain().focus().redo().run(),
        isAlignLeft: ctx.editor.isActive({ textAlign: "left" }) ?? false,
        isAlignCenter: ctx.editor.isActive({ textAlign: "center" }) ?? false,
        isAlignRight: ctx.editor.isActive({ textAlign: "right" }) ?? false,
        isAlignJustify: ctx.editor.isActive({ textAlign: "justify" }) ?? false,
        alignLeft: () =>
          ctx.editor.chain().focus().toggleTextAlign("left").run(),
        alignCenter: () =>
          ctx.editor.chain().focus().toggleTextAlign("center").run(),
        alignRight: () =>
          ctx.editor.chain().focus().toggleTextAlign("right").run(),
        alignJustify: () =>
          ctx.editor.chain().focus().toggleTextAlign("justify").run(),
      };
    },
  });
  const shortcuts = useEditorShortcuts(editor);

  return (
    <div className="bg-box w-full sticky top-0 z-10 py-3 sm:py-5 flex justify-center transition-[padding]">
      <div
        role="toolbar"
        aria-label="Barra de herramientas del editor"
        className="p-2 border border-border bg-background rounded-lg w-max space-y-1 lg:space-y-0 shadow-xl shadow-foreground/1 lg:flex"
      >
        <div className="flex gap-1 flex-wrap justify-around">
          <ToolbarButton
            isActive={editorState.isHeading1}
            onClick={() => editorState.toggleHeading1()}
            tooltipContent={shortcuts.heading1}
            aria-label="Encabezado 1"
          >
            <Heading1 />
          </ToolbarButton>
          <ToolbarButton
            isActive={editorState.isHeading2}
            onClick={() => editorState.toggleHeading2()}
            tooltipContent={shortcuts.heading2}
            aria-label="Encabezado 2"
          >
            <Heading2 />
          </ToolbarButton>
          <ToolbarButton
            isActive={editorState.isBold}
            onClick={() => editorState.toggleBold()}
            tooltipContent={shortcuts.bold}
            aria-label="Negrita"
          >
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleItalic()}
            isActive={editorState.isItalic}
            tooltipContent={shortcuts.italic}
            aria-label="Cursiva"
          >
            <Italic />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleStrike()}
            isActive={editorState.isStrike}
            tooltipContent={shortcuts.strike}
            aria-label="Tachado"
          >
            <Strikethrough />
          </ToolbarButton>
          <div className="w-5 lg:hidden"></div>
          <ToolbarButton
            onClick={() => editorState.toggleBulletList()}
            isActive={editorState.isBulletList}
            tooltipContent={shortcuts.bulletList}
            aria-label="Lista desordenada"
          >
            <List />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleOrderedList()}
            isActive={editorState.isOrderedList}
            tooltipContent={shortcuts.orderedList}
            aria-label="Lista ordenada"
          >
            <ListOrdered />
          </ToolbarButton>
        </div>

        <div className="flex gap-1 justify-center">
          <ToolbarButton
            onClick={() => editorState.alignLeft()}
            isActive={editorState.isAlignLeft}
            tooltipContent={shortcuts.alignLeft}
            aria-label="Alinear a la izquierda"
          >
            <AlignLeft />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.alignCenter()}
            isActive={editorState.isAlignCenter}
            tooltipContent={shortcuts.alignCenter}
            aria-label="Alinear al centro"
          >
            <AlignCenter />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.alignRight()}
            isActive={editorState.isAlignRight}
            tooltipContent={shortcuts.alignRight}
            aria-label="Alinear a la derecha"
          >
            <AlignRight />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.alignJustify()}
            isActive={editorState.isAlignJustify}
            tooltipContent={shortcuts.alignJustify}
            aria-label="Alinear justificado"
          >
            <AlignJustify />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.setHorizontalRule()}
            tooltipContent={shortcuts.horizontalRule}
            aria-label="Linea horizontal"
          >
            <Minus />
          </ToolbarButton>
          <div className="w-5"></div>
          <ToolbarButton
            onClick={() => editorState.undo()}
            disabled={!editorState.canUndo}
            aria-label="Deshacer"
            tooltipContent={shortcuts.undo}
          >
            <Undo />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.redo()}
            disabled={!editorState.canRedo}
            aria-label="Rehacer"
            tooltipContent={shortcuts.redo}
          >
            <Redo />
          </ToolbarButton>
        </div>
      </div>
    </div>
  );
}

function useEditorShortcuts(editor: Editor) {
  return {
    bold: parseShortcutKeys({
      shortcutKeys: getExtensionShortcut(editor, "bold") || "Mod-b",
    }),
    italic: parseShortcutKeys({
      shortcutKeys: getExtensionShortcut(editor, "italic") || "Mod-i",
    }),
    strike: parseShortcutKeys({
      shortcutKeys: getExtensionShortcut(editor, "strike") || SHORTCUTS.strike,
    }),
    heading1: parseShortcutKeys({ shortcutKeys: "Mod-Alt-1" }),
    heading2: parseShortcutKeys({ shortcutKeys: "Mod-Alt-2" }),
    bulletList: parseShortcutKeys({
      shortcutKeys:
        getExtensionShortcut(editor, "bulletList") || SHORTCUTS.bulletList,
    }),
    orderedList: parseShortcutKeys({
      shortcutKeys:
        getExtensionShortcut(editor, "orderedList") || SHORTCUTS.orderedList,
    }),
    horizontalRule: parseShortcutKeys({
      shortcutKeys:
        getExtensionShortcut(editor, "horizontalRule") ||
        SHORTCUTS.horizontalRule,
    }),
    undo: parseShortcutKeys({
      shortcutKeys: getExtensionShortcut(editor, "history", "undo") || "Mod-z",
    }),
    redo: parseShortcutKeys({
      shortcutKeys:
        getExtensionShortcut(editor, "history", "redo") ||
        (isMac ? "Mod-Shift-z" : "Mod-y"),
    }),
    alignLeft: parseShortcutKeys({
      shortcutKeys: SHORTCUTS.alignLeft,
      keyName: "←",
    }),
    alignCenter: parseShortcutKeys({
      shortcutKeys: SHORTCUTS.alignCenter,
      keyName: "↓",
    }),
    alignRight: parseShortcutKeys({
      shortcutKeys: SHORTCUTS.alignRight,
      keyName: "→",
    }),
    alignJustify: parseShortcutKeys({
      shortcutKeys: SHORTCUTS.alignJustify,
      keyName: "↑",
    }),
  };
}
