type ModalTitleProps = {
  children: React.ReactNode;
};

export function ModalTitle({ children }: ModalTitleProps) {
  return <h1 className="text-xl font-bold">{children}</h1>;
}
