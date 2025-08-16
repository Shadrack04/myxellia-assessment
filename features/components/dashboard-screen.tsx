import React from "react";
import SalesOverview from "./sales-overview";
import ListingsOverview from "./listings-overview";
import UsersOverview from "./users-overview";

export default function DashboardScreen() {
  return (
    <div className=" flex w-full gap-4">
      <div className=" flex-3">
        <SalesOverview />
      </div>
      <div className=" flex-2 bg-amber-900">
        <ListingsOverview />
        <UsersOverview />
      </div>
    </div>
  );
}
