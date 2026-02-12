import "./styles.css";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Search, X } from "lucide-react";
import { Button } from "../button";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useQueryState } from "@/hooks/use-query-state";

export function SearchBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { query, setQuery, onSearch } = useQueryState("q");
  const [isSearchOpen, setIsSearchOpen] = useState(!!query);
  useClickOutside([wrapperRef], () => setIsSearchOpen(false), !isSearchOpen);

  const handleSearchToggleOpen = () => {
    setIsSearchOpen((prev) => {
      if (!prev) {
        inputRef.current?.focus();
      }

      return !prev;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <Button
        size="icon-lg"
        variant="secondary"
        onClick={handleSearchToggleOpen}
        className={cn(
          "transition-[border-radius,background-color]",
          isSearchOpen && "rounded-l-none",
        )}
      >
        <span className="relative *:absolute *:top-1/2 *:left-1/2 *:-translate-x-1/2 *:-translate-y-1/2 *:transition-[opacity,display] *:transition-discrete">
          <Search
            data-open={isSearchOpen}
            className="hidden opacity-0 close-starting-style data-[open=false]:block data-[open=false]:opacity-100"
          />
          <X
            data-open={isSearchOpen}
            className="block open-starting-style data-[open=false]:hidden data-[open=false]:opacity-0"
          />
        </span>
      </Button>

      <div
        data-open={isSearchOpen}
        className="absolute top-0 right-full w-0 opacity-0 overflow-hidden rounded-l-lg bg-secondary/8 backdrop-blur-sm transition-[width,opacity] h-full data-[open=true]:w-72 data-[open=true]:opacity-100"
      >
        <input
          className="h-full w-full bg-transparent outline-none! ring-0! px-3 text-sm"
          placeholder="Buscar..."
          type="text"
          ref={inputRef}
          value={query ?? ""}
          onBlur={onSearch}
          autoFocus={isSearchOpen}
          onKeyDown={handleKeyDown}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
