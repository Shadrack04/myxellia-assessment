"use client";

import { useId, useRef, useState } from "react";
import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const handleClearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="*:not-first:mt-2 flex-1">
      <div className="relative">
        <Input
          id={id}
          className="peer ps-11 bg-muted placeholder:text-xs border-1 focus-visible:border-ring focus-visible:ring-[#6f74ed] focus-visible:ring-[1px]"
          placeholder="Search listings, users here..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Search aria-hidden="true" className=" size-6" />
        </div>
        {inputValue && (
          <button
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear input"
            onClick={handleClearInput}
          >
            <X
              size={12}
              aria-hidden="true"
              className="p-[1px] bg-[#5e5e5e] rounded-full text-white"
            />
          </button>
        )}
      </div>
    </div>
  );
}
