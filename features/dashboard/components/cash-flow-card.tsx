import { Card, CardContent } from "@/components/ui/card";
import { icons } from "@/constants/icons";
import Image, { StaticImageData } from "next/image";

type CashFlowCardProps = {
  icon: StaticImageData;
  amount: number;
  typeOfFlow: string;
  color: "#4545FE" | "#12B76A" | "#14B8A6" | "#F04438";
};

export function CashFlowCard({
  icon,
  amount,
  typeOfFlow,
  color,
}: CashFlowCardProps) {
  return (
    <Card className=" p-2 rounded-md">
      <CardContent className="px-2 flex flex-col gap-1">
        <h3 className=" text-[#4545FE] font-bold">N100,000,000.00</h3>
        <div className=" flex items-center gap-1">
          <p className=" text-[10px]">Total Inflow</p>
          <Image src={icons.inflowIcon} alt="inflow icon" />
          <p className=" text-[10px]">20%</p>
        </div>
      </CardContent>
    </Card>
  );
}
