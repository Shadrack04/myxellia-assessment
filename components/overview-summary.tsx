import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

import { ChevronRight } from "lucide-react";
import { OverviewSummaryProps } from "@/features/dashboard/type";

export default function OverviewSummary({
  image,
  sectionTitle,
  summary,
}: OverviewSummaryProps) {
  return (
    <Card className=" p-0 gap-0">
      <CardHeader className=" px-2 py-3 flex items-center justify-between bg-muted ">
        <div className=" flex items-center justify-center gap-2">
          <Image src={image} alt="listings icon" />
          <p className=" text-sm">{sectionTitle}</p>
        </div>
        <button className=" text-sm flex items-center text-[#6163e0] justify-center gap-1">
          View all <ChevronRight className=" size-4" />
        </button>
      </CardHeader>
      <CardContent className=" flex items-center gap-22 px-2 py-4">
        {summary?.map((item, index) => (
          <div key={index} className=" flex flex-col gap-2">
            <p className=" text-sm text-gray-600">{item.title}</p>
            <p className=" text-xl font-bold">{item.amount}K</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
