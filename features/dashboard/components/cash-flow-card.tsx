import { Card, CardContent } from "@/components/ui/card";
import { formatAmount } from "@/utils/amount-formatter";

import Image, { StaticImageData } from "next/image";

type CashFlowCardProps = {
  icon: StaticImageData;
  amount: number;
  typeOfFlow: string;
  color: "#4545FE" | "#12B76A" | "#14B8A6" | "#F04438";
  percentage: number;
};

export function CashFlowCard({
  icon,
  amount,
  typeOfFlow,
  color,
  percentage,
}: CashFlowCardProps) {
  return (
    <Card className=" p-2 rounded-md gap-0">
      <CardContent className="px-2 flex flex-col gap-1">
        <h3 style={{ color }} className={` font-bold`}>
          ₦{formatAmount.format(amount)}
        </h3>
        <div className=" flex items-center gap-1">
          <p className=" text-[10px]">{typeOfFlow}</p>
          <Image src={icon} alt="inflow icon" />
          <p style={{ color }} className={` text-[10px]`}>
            {percentage}%
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
