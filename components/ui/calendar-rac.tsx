"use client";

import * as React from "react";
import {
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
} from "react-aria-components";
import { getLocalTimeZone, today } from "@internationalized/date";

export function Calendar() {
  let [value, setValue] = React.useState(today(getLocalTimeZone()));

  return (
    <div className="p-4 border rounded-lg w-fit bg-white">
      <AriaCalendar
        value={value}
        onChange={setValue}
        aria-label="Calendar"
        className="flex flex-col gap-2"
      >
        <CalendarGrid className="border-collapse">
          <CalendarGridHeader>
            {(day) => (
              <CalendarHeaderCell className="p-2 text-sm font-medium text-gray-600">
                {day}
              </CalendarHeaderCell>
            )}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                date={date}
                className={({ isSelected }) =>
                  `p-2 text-center rounded-md ${
                    isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                {date.day}
              </CalendarCell>
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </AriaCalendar>
    </div>
  );
}
