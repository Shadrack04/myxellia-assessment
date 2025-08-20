import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { navData } from "@/data";

import Image from "next/image";

export default function NavigationTabs() {
  return (
    <Tabs defaultValue="1" className="items-center flex-3">
      <TabsList className=" w-full bg-background">
        {navData?.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.tabValue}
            className="data-[state=active]:bg-muted data-[state=active]:shadow-xs cursor-pointer data-[state=active]:font-bold font-normal flex items-center justify-center gap-2 py-4"
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              className=" size-5"
            />
            <p className="">{item.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="tab-1"></TabsContent>
      <TabsContent value="tab-2"></TabsContent>
      <TabsContent value="tab-3"></TabsContent>
    </Tabs>
  );
}
