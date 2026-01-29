import "./styles.css";
import { EditorContent, useEditor } from "@tiptap/react";
import { EXTENSIONS } from "./constants";
import { TextEditorToolbar } from "./text-editor-toolbar";
import { cn } from "@/lib/utils";

type TextEditorProps = {
  onValueChange: (value: string) => void;
  autoFocus?: boolean;
  className?: string;
  value: string;
};

export function TextEditor({
  autoFocus = false,
  className,
  value,
  onValueChange,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: EXTENSIONS,
    autofocus: autoFocus,
    content: value,
    onUpdate: ({ editor }) => {
      onValueChange(editor.getHTML());
    },
  });

  return (
    <div
      className={cn(
        "bg-box border border-border rounded-xl h-[calc(100dvh-9.3rem)] min-h-120 w-full overflow-hidden flex flex-col items-center",
        className,
      )}
    >
      <TextEditorToolbar editor={editor} />
      <EditorContent editor={editor} className="grow w-full" />
    </div>
  );
}
