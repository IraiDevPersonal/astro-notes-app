import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Italic from "@tiptap/extension-italic";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import Paragraph from "@tiptap/extension-paragraph";
import Strike from "@tiptap/extension-strike";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import { UndoRedo } from "@tiptap/extensions";
import type { Extensions } from "@tiptap/react";

export const SHORTCUTS = {
  strike: "Mod-Alt-s",
  bold: "Mod-Alt-b",
  italic: "Mod-Alt-i",
  bulletList: "Mod-Alt-l",
  orderedList: "Mod-Alt-o",
  horizontalRule: "Mod-Alt-h",
  alignLeft: "Mod-Shift-ArrowLeft",
  alignCenter: "Mod-Shift-ArrowDown",
  alignRight: "Mod-Shift-ArrowRight",
  alignJustify: "Mod-Shift-ArrowUp",
};

const CustomStrike = Strike.extend({
  addKeyboardShortcuts() {
    return {
      [SHORTCUTS.strike]: () => this.editor.commands.toggleStrike(),
    };
  },
});

const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      [SHORTCUTS.bulletList]: () => this.editor.commands.toggleBulletList(),
    };
  },
});

const CustomOrderedList = OrderedList.extend({
  addKeyboardShortcuts() {
    return {
      [SHORTCUTS.orderedList]: () => this.editor.commands.toggleOrderedList(),
    };
  },
});

const CustomHorizontalRule = HorizontalRule.extend({
  addKeyboardShortcuts() {
    return {
      [SHORTCUTS.horizontalRule]: () =>
        this.editor.commands.setHorizontalRule(),
    };
  },
});

const CustomTextAlign = TextAlign.extend({
  addKeyboardShortcuts() {
    return {
      [SHORTCUTS.alignLeft]: () => this.editor.commands.toggleTextAlign("left"),
      [SHORTCUTS.alignCenter]: () =>
        this.editor.commands.toggleTextAlign("center"),
      [SHORTCUTS.alignRight]: () =>
        this.editor.commands.toggleTextAlign("right"),
      [SHORTCUTS.alignJustify]: () =>
        this.editor.commands.toggleTextAlign("justify"),
    };
  },
}).configure({
  alignments: ["left", "center", "right", "justify"],
  defaultAlignment: "left",
  types: ["heading", "paragraph"],
});

const CustomBold = Bold.configure({
  HTMLAttributes: {
    class: "font-extrabold",
  },
});

const CustomParagraph = Paragraph.configure({
  HTMLAttributes: {
    class: "font-normal",
  },
});

export const EXTENSIONS: Extensions = [
  Text,
  Italic,
  Heading,
  UndoRedo,
  Document,
  ListItem,
  CustomBold,
  CustomStrike,
  CustomParagraph,
  CustomTextAlign,
  CustomBulletList,
  CustomOrderedList,
  CustomHorizontalRule,
];
