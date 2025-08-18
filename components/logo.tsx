import { icons } from "@/constants/icons";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Image
        src={icons.myxelliaLogo}
        alt="Myxellia brand logo"
        className=" h-20 w-34"
      />
    </div>
  );
}
