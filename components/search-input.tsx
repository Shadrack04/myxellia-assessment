import { useId } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2 flex-1">
      <div className="relative">
        <Input
          id={id}
          className="peer ps-9 bg-muted placeholder:text-xs "
          placeholder="Search listings, users here..."
          type="email"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Search aria-hidden="true" className=" size-6" />
        </div>
      </div>
    </div>
  );
}
