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
