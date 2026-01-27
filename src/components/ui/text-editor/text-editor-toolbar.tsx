import { Editor, useEditorState } from "@tiptap/react";
import {
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
import { Button } from "../button";
import { Tooltip } from "../tooltip";
import { useRef } from "react";

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
        toggleHorizontalRule: () =>
          ctx.editor.chain().focus().setHorizontalRule().run(),
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
        undo: () => ctx.editor.chain().focus().undo().run(),
        redo: () => ctx.editor.chain().focus().redo().run(),
      };
    },
  });

  return (
    <div className="bg-box w-full sticky top-0 z-10 py-3 sm:py-5 flex justify-center transition-[padding]">
      <div
        role="toolbar"
        aria-label="Barra de herramientas del editor"
        className="p-2 border border-border bg-background rounded-lg w-max space-y-1 shadow-xl shadow-foreground/1.5"
      >
        <div className="flex gap-1 flex-wrap justify-around">
          <ToolbarButton
            isActive={editorState.isHeading1}
            onClick={() => editorState.toggleHeading1()}
            tooltipContent="crtl + 1"
            aria-label="Encabezado 1"
          >
            <Heading1 />
          </ToolbarButton>
          <ToolbarButton
            isActive={editorState.isHeading2}
            onClick={() => editorState.toggleHeading2()}
            tooltipContent="crtl + 2"
            aria-label="Encabezado 2"
          >
            <Heading2 />
          </ToolbarButton>
          <ToolbarButton
            isActive={editorState.isBold}
            onClick={() => editorState.toggleBold()}
            tooltipContent="crtl + b"
            aria-label="Negrita"
          >
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleItalic()}
            isActive={editorState.isItalic}
            tooltipContent="crtl + i"
            aria-label="Cursiva"
          >
            <Italic />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleStrike()}
            isActive={editorState.isStrike}
            tooltipContent="crtl + s"
            aria-label="Tachado"
          >
            <Strikethrough />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleBulletList()}
            isActive={editorState.isBulletList}
            tooltipContent="crtl + u"
            aria-label="Lista desordenada"
          >
            <List />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleOrderedList()}
            isActive={editorState.isOrderedList}
            tooltipContent="crtl + o"
            aria-label="Lista ordenada"
          >
            <ListOrdered />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.toggleHorizontalRule()}
            tooltipContent="crtl + -"
            aria-label="Linea horizontal"
          >
            <Minus />
          </ToolbarButton>
        </div>
        <div className="flex gap-1 justify-center">
          <ToolbarButton
            onClick={() => editorState.undo()}
            disabled={!editorState.canUndo}
            aria-label="Deshacer"
            tooltipContent="crtl + z"
          >
            <Undo />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editorState.redo()}
            disabled={!editorState.canRedo}
            aria-label="Rehacer"
            tooltipContent="crtl + shift + z"
          >
            <Redo />
          </ToolbarButton>
        </div>
      </div>
    </div>
  );
}

type ToolbarButtonProps = {
  children: React.ReactNode;
  tooltipContent: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
};

function ToolbarButton({
  onClick,
  disabled,
  isActive,
  children,
  tooltipContent,
}: ToolbarButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <Tooltip
      placement="bottom"
      triggerRef={buttonRef}
      trigger={
        <Button
          onClick={onClick}
          disabled={disabled}
          variant={isActive ? "secondary" : "text"}
        >
          {children}
        </Button>
      }
    >
      {tooltipContent}
    </Tooltip>
  );
}
