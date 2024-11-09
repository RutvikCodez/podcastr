"use client";
import { TabDataType } from "@/utils/type";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReuseableTabs = ({ tabs }: { tabs: TabDataType[] }) => {
  return (
    <Tabs defaultValue={tabs.at(0)!.value} className="w-full">
      <TabsList className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="w-full border focus-visible:bg-transparent"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="w-full h-fit flex items-center justify-center"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ReuseableTabs;
