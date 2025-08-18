"use client";

import React from "react";
import Logo from "./logo";
import Image from "next/image";
import { icons } from "@/constants/icons";
import Profile from "./profile";
import NavigationTabs from "./navigation-tabs";
import SearchInput from "./search-input";
import CalenderComponent from "./calendar";

import BudgetDialog from "./budget-dialog";

export default function AppNav() {
  return (
    <header className=" w-full h-34">
      <div className="costume-padding bg-foreground w-full h-1/2 flex items-center justify-between">
        <Logo />
        <div className=" flex items-center justify-center gap-6">
          <div className=" flex items-center justify-center gap-6">
            <Image
              src={icons.bellIcon}
              alt="Notification icon "
              className=" size-6"
            />

            <BudgetDialog />
            <Image
              src={icons.calenderIcon}
              alt="Notification icon"
              className=" size-6"
            />
            <Image
              src={icons.messageIcon}
              alt="Notification icon"
              className=" size-6"
            />
          </div>
          <Profile />
        </div>
      </div>
      <div className="costume-padding border-b-2 w-full h-1/2 flex items-center">
        <NavigationTabs />
        <SearchInput />
        <CalenderComponent />
      </div>
    </header>
  );
}
