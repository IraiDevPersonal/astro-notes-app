import "./styles.css";
import { EditorContent, useEditor } from "@tiptap/react";
import { EXTENSIONS } from "./constants";
import { TextEditorToolbar } from "./text-editor-toolbar";

type TextEditorProps = {
  autoFocus?: boolean;
};

export function TextEditor({ autoFocus = false }: TextEditorProps) {
  const editor = useEditor({
    extensions: EXTENSIONS,
    autofocus: autoFocus,
  });

  return (
    <div className="bg-box border border-border rounded-xl h-[calc(100dvh-9.3rem)] min-h-120 w-full shadow-2xl shadow-foreground/5 overflow-hidden flex flex-col items-center">
      <TextEditorToolbar editor={editor} />
      <EditorContent editor={editor} className="grow w-full" />
    </div>
  );
}
