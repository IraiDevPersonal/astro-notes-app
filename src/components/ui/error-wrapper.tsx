import { cn } from "@/lib/utils";
import { Typography } from "./typography";

type ErrorWrapperProps = {
  children: React.ReactNode;
  error: string | null;
  className?: string;
};

export function ErrorWrapper({
  error,
  children,
  className,
}: ErrorWrapperProps) {
  if (error) {
    return (
      <div>
        <Typography className={cn("text-danger text-center", className)}>
          {error}
        </Typography>
      </div>
    );
  }

  return children;
}
