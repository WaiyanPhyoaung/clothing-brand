import { SlidersHorizontal } from "lucide-react";
import FilterItem from "@/components/products/filterItem";

function Filter() {
  return (
    <div className="my-6 p-6 border flex justify-start items-center gap-4">
      <SlidersHorizontal />
      <div className="flex gap-2">
        {Array(5)
          .fill(" ")
          .map((_, index) => (
            <FilterItem key={index} />
          ))}
      </div>
    </div>
  );
}
export default Filter;
