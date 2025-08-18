"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect } from "react";

type BudgetingCardProps = {
  isOpenBudget: boolean;
};

export default function BudgetingCard({ isOpenBudget }: BudgetingCardProps) {
  useEffect(() => {
    if (isOpenBudget) {
      document.body.classList.add("overflow-hidden");
    } else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpenBudget]);
  return (
    <Card className="w-full max-w-sm overflow-hidden z-50 gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 pb-6">
      <CardHeader className=" relative bg-[#0C2841] px-5.5 pt-5.5 pb-0 gap-0">
        <Image src={images.budgetHeader} alt="Budget header image" />
        <Image
          src={icons.budgetCalculator}
          alt=""
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        />
      </CardHeader>
      <CardContent className=" px-8 py-0 pb-2 flex flex-col gap-4">
        <div className=" flex items-center justify-center gap-2">
          <Image src={icons.budgetIcon1} alt="" />
          <div>
            <p className=" font-bold">
              Set up annual budgets by account category
            </p>
            <p className=" text-xs text-gray-600">
              Allocate funds across income and expense lines with full
              visibility.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <Image src={icons.budgetIcon2} alt="" />
          <div>
            <p className=" font-bold">Track actuals vs budget in real time</p>
            <p className=" text-xs text-gray-600">
              See how your community is performing against plan, month by month.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <Image src={icons.budgetIcon3} alt="" />
          <div>
            <p className=" font-bold">Adjust figures and forecast with ease</p>
            <p className=" text-xs text-gray-600">
              Edit amounts, apply percentage changes, or roll forward last
              year’s data—all in one place.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className=" w-full">Create Budget</Button>
      </CardFooter>
    </Card>
  );
}
