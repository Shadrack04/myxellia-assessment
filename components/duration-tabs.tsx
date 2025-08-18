import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DurationTabs() {
  return (
    <Tabs defaultValue="tab-3" className="items-center p-0">
      <TabsList className=" bg-background w-[40%] flex items-center gap-6">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:bg-muted data-[state=active]:font-bold font-normal flex items-center justify-center gap-2 py-4"
        >
          1 Week
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:bg-muted data-[state=active]:font-bold font-normal flex items-center justify-center gap-2 py-4"
        >
          1 Month
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:bg-muted px-4 data-[state=active]:font-medium font-normal flex items-center justify-center gap-2 py-4"
        >
          1 Year
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1"></TabsContent>
      <TabsContent value="tab-2"></TabsContent>
      <TabsContent value="tab-3"></TabsContent>
    </Tabs>
  );
}
