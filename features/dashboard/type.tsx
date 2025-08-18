import { StaticImageData } from "next/image";

type SummaryType = {
  title: string;
  amount: number;
};

export type OverviewSummaryProps = {
  image: StaticImageData;
  sectionTitle: string;
  summary: SummaryType[];
};

export type SalesOverviewDataType = {
  label: string[];
  datasets: {
    data: number[];
    backgroundColor: string;
    barPercentage: number;
    categoryPercentage: number;
  }[];
};
