"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BudgetingCard from "./budgeting";
import Image from "next/image";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

export default function BudgetDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={icons.budgetIcon}
          alt="Notification icon"
          className=" size-6"
        />
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className=" w-sm overflow-hidden gap-2 p-0 pb-6"
      >
        <DialogHeader className=" relative bg-[#0C2841] px-5.5 pt-5.5 pb-0 gap-0">
          <Image src={images.budgetHeader} alt="Budget header image" />
          <Image
            src={icons.budgetCalculator}
            alt=""
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </DialogHeader>
        <div className="  px-8 py-0 pb-2 flex flex-col gap-4">
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
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <Image src={icons.budgetIcon3} alt="" />
            <div>
              <p className=" font-bold">
                Adjust figures and forecast with ease
              </p>
              <p className=" text-xs text-gray-600">
                Edit amounts, apply percentage changes, or roll forward last
                year’s data—all in one place.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="px-8">
          <Button className=" rounded-full w-full">Create Budget</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
