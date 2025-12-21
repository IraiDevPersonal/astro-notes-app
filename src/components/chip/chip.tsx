import { cn } from "@/lib/utils";
import { chipVariant } from "./variant";
import { type VariantProps } from "class-variance-authority";

type ChipProps = {
  children: React.ReactNode;
} & VariantProps<typeof chipVariant>;

export function Chip({ variant, size, children }: ChipProps) {
  return <div className={cn(chipVariant({ variant, size }))}>{children}</div>;
}
