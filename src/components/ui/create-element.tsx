import React from "react";

type CreateElementProps<T extends React.ElementType> = {
  children: React.ReactNode;
  as: T;
} & React.ComponentPropsWithRef<T>;

export function CreateElement<T extends React.ElementType>({
  children,
  as,
  ...props
}: CreateElementProps<T>) {
  return React.createElement(as, props, children);
}
