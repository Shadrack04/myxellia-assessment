"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, getDefaultClassNames } from "react-day-picker";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "./ui/calendar";

export default function TestCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );

  return (
    <div className="fixed bottom-0 z-50">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="w-[21.5rem] h-screen rounded-none border shadow-sm"
        classNames={{
          months: "flex-1 flex flex-col",
          month: "flex-1 flex flex-col",
          table:
            "flex-1 flex flex-col h-full border-collapse [display:flex] [flex-direction:column]", // force table into flex
          head: "h-auto", // weekdays row fixed
          tbody: "flex-1 flex flex-col", // flex container for rows
          row: "flex-1 flex", // each week row fills evenly
          cell: "flex-1 flex items-center justify-center [display:flex] [flex:1]", // cells stretch
          day: "h-full w-full flex items-center justify-center", // day button stretches
        }}
      />
    </div>
  );
}
