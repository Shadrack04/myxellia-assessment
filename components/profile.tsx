import React from "react";

import {
  BoltIcon,
  BookOpenIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" size-10 flex items-center cursor-pointer justify-center rounded-full bg-background text-xl">
          D
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="w-80 p-3 flex flex-col gap-2"
      >
        <DropdownMenuLabel className="flex px-2 py-4 items-start gap-3 bg-muted">
          <div className=" size-12 flex items-center justify-center text-white rounded-full bg-[#156e58] text-xl">
            D
          </div>
          <div className="flex gap-2 min-w-0 flex-col">
            <span className="text-foreground truncate font-bold text-xl">
              Dylan Frank
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              dylan96@originui.com
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuItem className=" py-2">
          <BoltIcon size={16} className=" text-foreground" aria-hidden="true" />
          <span className=" text-lg font-medium">Teams</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border/20" />
        <DropdownMenuItem className=" py-1.5">
          <Layers2Icon
            size={16}
            className=" text-foreground"
            aria-hidden="true"
          />
          <span className=" text-lg font-medium">Contact Persons</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border/20" />
        <DropdownMenuItem className=" py-1.5">
          <BookOpenIcon
            size={16}
            className=" text-foreground"
            aria-hidden="true"
          />
          <span className=" text-lg font-medium">Change Password</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border/20" />

        <DropdownMenuItem className=" py-1.5">
          <PinIcon size={16} className=" text-foreground" aria-hidden="true" />
          <span className=" text-lg font-medium">2-Factor Authentication</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border/20" />
        <DropdownMenuItem className=" py-1.5">
          <LogOutIcon
            size={16}
            className="text-destructive"
            aria-hidden="true"
          />
          <span className=" text-destructive text-lg font-medium">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
