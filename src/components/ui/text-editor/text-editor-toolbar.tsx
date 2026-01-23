import { Editor, useEditorState } from "@tiptap/react";
import { Button } from "../button";
import {
  BoldIcon,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Minus,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";

export function TextEditorToolbar({ editor }: { editor: Editor }) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
      };
    },
  });

  return (
    <div className="p-2 border border-border bg-background rounded-lg w-max max-w-[calc(100%-1rem)] absolute top-2 left-1/2 -translate-x-1/2 z-10">
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          variant={editorState.isHeading1 ? "secondary" : "text"}
        >
          <Heading1 />
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          variant={editorState.isHeading2 ? "secondary" : "text"}
        >
          <Heading2 />
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          variant={editorState.isHeading3 ? "secondary" : "text"}
        >
          <Heading3 />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          variant={editorState.isBold ? "secondary" : "text"}
        >
          <BoldIcon />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          variant={editorState.isItalic ? "secondary" : "text"}
        >
          <Italic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          variant={editorState.isStrike ? "secondary" : "text"}
        >
          <Strikethrough />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          variant={editorState.isBulletList ? "secondary" : "text"}
        >
          <List />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          variant={editorState.isOrderedList ? "secondary" : "text"}
        >
          <ListOrdered />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          variant={"text"}
        >
          <Minus />
        </Button>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
          variant={"secondary"}
          className="ml-auto"
        >
          <Undo />
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
          variant={"secondary"}
        >
          <Redo />
        </Button>
      </div>
    </div>
  );
}
