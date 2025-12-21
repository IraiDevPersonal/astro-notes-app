import { cn } from "@/lib/utils";

type ModalDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function ModalDescription({
  children,
  className,
}: ModalDescriptionProps) {
  return (
    <p
      aria-describedby="Modal Description"
      className={cn("text-base text-muted-foreground", className)}
    >
      {children}
    </p>
  );
}
