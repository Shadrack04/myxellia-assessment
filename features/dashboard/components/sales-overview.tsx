import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CashFlowCard } from "./cash-flow-card";
import DurationTabs from "@/components/duration-tabs";

export default function SalesOverview() {
  return (
    <Card className="w-full p-0">
      <CardHeader className="border-b-2 pt-3 px-3">
        <div className="flex justify-between ">
          <div className=" flex flex-col gap-1">
            <h2 className=" font-bold text-lg">Sales Overview</h2>
            <p className=" text-xs text-gray-400">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <div>
            <Button
              variant={"outline"}
              className=" rounded-full font-medium px-8 py-5 text-sm"
            >
              View Transactions
            </Button>
          </div>
        </div>
        <div className=" w-full flex items-center justify-end">
          <DurationTabs />
        </div>
      </CardHeader>
      <CardContent className="w-full grid grid-cols-2">
        <div className=" ">hello</div>
        <div className=" grid grid-cols-2 gap-4 pl-6">
          <CashFlowCard />
          <CashFlowCard />
          <CashFlowCard />
          <CashFlowCard />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
