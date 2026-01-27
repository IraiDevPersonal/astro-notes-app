import { TextStyleKit } from "@tiptap/extension-text-style";
import type { Extensions } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.css";
import { TextEditorToolbar } from "./text-editor-toolbar";

const extensions: Extensions = [TextStyleKit, StarterKit];

export function TextEditor() {
  const editor = useEditor({
    extensions,
    autofocus: true,
  });

  return (
    <div className="bg-box border border-border rounded-xl h-dvh w-full shadow-2xl shadow-foreground/5 overflow-hidden flex flex-col items-center">
      <TextEditorToolbar editor={editor} />
      <EditorContent editor={editor} className="grow w-full" />
    </div>
  );
}
