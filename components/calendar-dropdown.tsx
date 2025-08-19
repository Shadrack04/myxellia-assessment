"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarComponent from "./calendar";
import Image from "next/image";
import { icons } from "@/constants/icons";

export default function CalendarDropdown(e) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src={icons.calenderIcon}
          alt="Notification icon"
          className=" size-6 cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={20}
        align="start"
        className=" top-[4.25rem] border-0 gap-4 p-0 flex flex-col rounded-none bg-foreground z-50 w-86 h-[calc(100vh-3.25rem)]"
      >
        <div className=" bg-foreground text-background px-4 w-full flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <ArrowLeft />
            <p>Calendar</p>
          </div>
          <X />
        </div>
        <div className=" relative w-full h-[90%]">
          <CalendarComponent />
        </div>
      </PopoverContent>
    </Popover>
  );
}
