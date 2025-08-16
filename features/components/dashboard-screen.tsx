import React from "react";
import SalesOverview from "./sales-overview";
import ListingsOverview from "./listings-overview";
import UsersOverview from "./users-overview";

export default function DashboardScreen() {
  return (
    <div className=" flex w-full gap-4">
      <div className=" flex-8">
        <SalesOverview />
      </div>
      <div className=" flex-4 flex flex-col justify-between">
        <ListingsOverview />
        <UsersOverview />
      </div>
    </div>
  );
}
