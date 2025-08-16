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
