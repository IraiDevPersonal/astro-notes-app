import { cn } from "@/lib/utils";

type FieldProps = {
  children: React.ReactNode;
  className?: string;
};

export function Field({ children, className }: FieldProps) {
  return (
    <div className={cn("gap-y-1 w-full flex flex-col", className)}>
      {children}
    </div>
  );
}
