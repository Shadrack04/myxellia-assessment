import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function SalesOverview() {
  return (
    <Card className="w-full max-w-sm px-0">
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
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
