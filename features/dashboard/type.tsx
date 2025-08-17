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
