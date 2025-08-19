import { icons } from "@/constants/icons";
import Image from "next/image";
import React from "react";

type ArrowProps = {
  direction: "left" | "right";
  className?: string;
};

export default function Arrow({ direction, className }: ArrowProps) {
  if (direction == "left")
    return <Image src={icons.arrowLeft} alt="" className={className} />;
  if (direction == "right")
    return <Image src={icons.arrowRight} alt="" className={className} />;
}
