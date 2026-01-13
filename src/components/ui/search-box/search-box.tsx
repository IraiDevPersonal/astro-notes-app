import { useClickOutside } from "@/hooks/use-click-outside";
import { Search, X } from "lucide-react";
import { Button } from "../button";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./styles.css";

export function SearchBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useClickOutside([wrapperRef], () => setIsSearchOpen(false), !isSearchOpen);

  const handleSearchToggleOpen = () => {
    setIsSearchOpen((prev) => {
      if (!prev) {
        inputRef.current?.focus();
      }

      return !prev;
    });
  };

  return (
    <div ref={wrapperRef} className="relative">
      <Button
        size="icon"
        variant="secondary"
        onClick={handleSearchToggleOpen}
        className={cn(
          "transition-[border-radius,background-color]",
          isSearchOpen && "rounded-l-none"
        )}
      >
        <span className="relative *:absolute *:top-1/2 *:left-1/2 *:-translate-x-1/2 *:-translate-y-1/2 *:transition-[opacity,display] *:transition-discrete">
          <X
            className={cn(
              "hidden opacity-0 x-starting-style",
              isSearchOpen && "block opacity-100"
            )}
          />
          <Search
            className={cn(
              "block search-starting-style",
              isSearchOpen && "hidden opacity-0"
            )}
          />
        </span>
      </Button>

      <div
        className={cn(
          "absolute top-0 right-full w-0 opacity-0 overflow-hidden rounded-l bg-secondary/8 backdrop-blur-sm transition-[width,opacity]",
          isSearchOpen && "w-72 opacity-100"
        )}
      >
        <input
          className="h-9 w-full bg-transparent outline-none! ring-0! px-3 text-sm"
          placeholder="Buscar..."
          type="text"
          ref={inputRef}
        />
      </div>
    </div>
  );
}
