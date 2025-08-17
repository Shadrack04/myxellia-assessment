import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CashFlowCard } from "./cash-flow-card";

export default function SalesOverview() {
  return (
    <Card className="w-full px-0">
      <CardHeader className="border-b-2 ">
        <div className="flex justify-between ">
          <div>
            <h2>Sales Overview</h2>
            <p>Showing overview Jan 2022 - Sep 2022</p>
          </div>
          <div>
            <Button>View Transactions</Button>
          </div>
        </div>
        <div></div>
      </CardHeader>
      <CardContent className="w-full grid grid-cols-2">
        <div className=" ">hello</div>
        <div className=" grid grid-cols-2 gap-4">
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
