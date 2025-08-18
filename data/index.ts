import { icons } from "@/constants/icons";

type NavDataType = {
  id: string;
  title: string;
  icon: string;
  tabValue: string;
};

export const navData: NavDataType[] = [
  { id: "1", title: "Dashboard", icon: icons.dashboardIcon, tabValue: "1" },
  { id: "2", title: "Listings", icon: icons.listingsIcon, tabValue: "2" },
  { id: "3", title: "Users", icon: icons.userIcon, tabValue: "3" },
  { id: "4", title: "Request", icon: icons.requestIcon, tabValue: "4" },
  {
    id: "5",
    title: "Applications",
    icon: icons.applicationIcon,
    tabValue: "5",
  },
];

export const listingOverviewData = {
  image: icons.listingIconBlue,
  sectionTitle: "Listing Overview",
  summary: [
    { title: "Total", amount: 1.8 },
    { title: "Active", amount: 80 },
    { title: "Archived", amount: 1 },
  ],
};

export const UsersOverviewData = {
  image: icons.userIconBlue,
  sectionTitle: "Users Overview",
  summary: [
    { title: "Total", amount: 20.7 },
    { title: "Riders", amount: 8.5 },
    { title: "Subscribers", amount: 7.5 },
  ],
};

export const salesOverviewData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      data: [12000, 19000, 3000, 5000, 2000, 30000, 5000, 30000, 24000],
      backgroundColor: "#4545FE",
      barPercentage: 0.6,
      categoryPercentage: 0.8,
    },
    {
      data: [8000, 14000, 2000, 4000, 1000, 25000, 23000, 20000, 6000],
      backgroundColor: "#12B76A",
      barPercentage: 0.6,
      categoryPercentage: 0.8,
    },
    {
      data: [8000, 14000, 2000, 4000, 1000, 25000, 14500, 23800, 5630],
      backgroundColor: "#F04438",
      barPercentage: 0.6,
      categoryPercentage: 0.8,
    },
  ],
};
