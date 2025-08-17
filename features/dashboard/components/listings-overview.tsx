import React from "react";

import { listingOverviewData } from "@/data";
import OverviewSummary from "@/components/overview-summary";

export default function ListingsOverview() {
  const { image, sectionTitle, summary } = listingOverviewData;
  return (
    <OverviewSummary
      image={image}
      sectionTitle={sectionTitle}
      summary={summary}
    />
  );
}
