import React from "react";

import { UsersOverviewData } from "@/data";
import OverviewSummary from "@/components/overview-summary";

export default function UsersOverview() {
  const { image, sectionTitle, summary } = UsersOverviewData;
  return (
    <OverviewSummary
      image={image}
      sectionTitle={sectionTitle}
      summary={summary}
    />
  );
}
