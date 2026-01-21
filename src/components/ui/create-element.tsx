import React from "react";

type CreateElementProps<T extends React.HTMLElementType> =
  React.ComponentPropsWithRef<T> & {
    children: React.ReactNode;
    as: T;
  };

export function CreateElement({
  children,
  as,
  ...props
}: CreateElementProps<React.HTMLElementType>) {
  return React.createElement(as, props, children);
}
