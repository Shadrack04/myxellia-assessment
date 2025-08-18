import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CashFlowCard } from "./cash-flow-card";
import DurationTabs from "@/components/duration-tabs";
import { icons } from "@/constants/icons";
import BarChart from "./barchart";
import { salesOverviewData } from "@/data";

export default function SalesOverview() {
  const data = salesOverviewData;
  return (
    <Card className="w-full p-0 gap-2">
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
              className=" rounded-full font-medium px-8 py-5 text-xs"
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
        <div className=" ">
          <BarChart data={data} />
        </div>
        <div className=" grid grid-cols-2 pt-4 gap-2 pl-6">
          <CashFlowCard
            icon={icons.inflowIcon}
            amount={120000000}
            typeOfFlow="Total Inflow"
            color="#4545FE"
            percentage={20}
          />
          <CashFlowCard
            icon={icons.inflowIcon}
            amount={50000000}
            typeOfFlow="MRR"
            color="#12B76A"
            percentage={2.5}
          />
          <CashFlowCard
            icon={icons.gmvIcon}
            amount={200000000}
            typeOfFlow="GMV"
            color="#14B8A6"
            percentage={0.5}
          />
          <CashFlowCard
            icon={icons.revenueIcon}
            amount={120000000}
            typeOfFlow="Revenue"
            color="#F04438"
            percentage={0.5}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
