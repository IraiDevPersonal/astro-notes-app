import "./styles.css";
import { TextStyleKit } from "@tiptap/extension-text-style";
import type { Extensions } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextEditorToolbar } from "./text-editor-toolbar";

const extensions: Extensions = [TextStyleKit, StarterKit];

export function TextEditor() {
  const editor = useEditor({
    extensions,
  });

  return (
    <div className="bg-box border border-border rounded-xl h-dvh w-full shadow-2xl shadow-foreground/5 overflow-hidden relative tiptap pt-13">
      <TextEditorToolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="*:outline-none *:h-[calc(100dvh-8rem)] *:max-h-[calc(100dvh-8rem)] overflow-auto *:p-6"
      />
    </div>
  );
}
