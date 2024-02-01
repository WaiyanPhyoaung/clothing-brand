"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import NormalFilterLists from "./NormalFilterLists";
import { FilterCategory } from "@/data/filterCategory";

type FilterItemProps = {
  category: FilterCategory;
};

function FilterItem({ category }: FilterItemProps) {
  const [isOpenContent, setIsOpenContent] = useState(false);
  return (
    <Popover open={isOpenContent} onOpenChange={setIsOpenContent}>
      <PopoverTrigger>
        <Button
          variant={isOpenContent ? "default" : "outline"}
          className="flex justify-center items-center gap-2 px-2 py-2 border"
        >
          <span>{category.name}</span>

          <ChevronRight
            className={`h-4 w-4 mt-[1px] duration-75 ${
              isOpenContent ? "rotate-90" : "rotate-0"
            }`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0 min-w-[220px]">
        <NormalFilterLists options={category.options} />
      </PopoverContent>
    </Popover>
  );
}
export default FilterItem;
