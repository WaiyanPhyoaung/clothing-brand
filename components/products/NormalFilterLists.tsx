"use client";

import { X, XCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Option } from "@/data/filterCategory";

function NormalFilterLists({ options }: { options: Option[] }) {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className=" h-6 px-1 py-1 flex justify-center items-center"
        >
          Clear
          <XCircle className="h-4 w-4 ml-[1px] mt-[2px] " />
        </Button>
        <Button
          variant="default"
          size="sm"
          className=" h-6 px-1 py-1 rounded-full"
        >
          <X className="h-4 w-4 " />
        </Button>
      </div>
      <div className="p-1">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2 mt-4">
            <Checkbox id={option.value} />
            <label
              htmlFor={option.value}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NormalFilterLists;
