import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { ChevronRight } from "lucide-react";

export default function UsersOverview() {
  return (
    <Card className=" p-0 gap-0">
      <CardHeader className=" px-2 py-3 flex items-center justify-between bg-muted ">
        <div className=" flex items-center justify-center gap-2">
          <Image src={icons.dashboardIcon} alt="listings icon" />
          <p className=" text-sm">Listing Overview</p>
        </div>
        <button className=" text-sm flex items-center justify-center gap-1">
          View all <ChevronRight className=" size-4" />
        </button>
      </CardHeader>
      <CardContent className=" flex items-center justify-between px-2 py-4">
        <div>
          <p className=" text-sm text-gray-600">Total</p>
          <p className=" text-xl font-bold">1.8k</p>
        </div>
        <div>
          <p className=" text-sm text-gray-600">Active</p>
          <p className=" text-xl font-bold">1.8k</p>
        </div>
        <div>
          <p className=" text-sm text-gray-600">Archived</p>
          <p className=" text-xl font-bold">1.8k</p>
        </div>
      </CardContent>
    </Card>
  );
}
