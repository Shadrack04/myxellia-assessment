import React from "react";
import SalesOverview from "./sales-overview";
import ListingsOverview from "./listings-overview";
import UsersOverview from "./users-overview";
import ImageCard from "@/components/image-card";
import { images } from "@/constants/images";

export default function DashboardScreen() {
  return (
    <div className=" pb-8 flex flex-col gap-4">
      <div className=" flex flex-col md:flex-row w-full gap-4">
        <div className=" flex-10">
          <SalesOverview />
        </div>
        <div className=" flex-4 flex flex-col justify-between">
          <ListingsOverview />
          <UsersOverview />
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <ImageCard
          category="Most CLICKED"
          image={images.image1}
          imageQuantity={2}
        />
        <ImageCard
          category="MOST WATCHLISTED"
          image={images.image2}
          imageQuantity={5}
        />
        <ImageCard
          category="HOTTEST LISTING"
          image={images.image3}
          imageQuantity={5}
        />
      </div>
    </div>
  );
}
