import { SlidersHorizontal } from "lucide-react";
import FilterItem from "@/components/products/filterItem";
import { filterCategories } from "@/data/filterCategory";

function Filter() {
  return (
    <div className="my-6 p-6 border flex justify-start items-center gap-4">
      <SlidersHorizontal />
      <div className="flex gap-4">
        {filterCategories.map((category, index) => (
          <FilterItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
