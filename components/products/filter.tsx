import { SlidersHorizontal } from "lucide-react";
import FilterItem from "@/components/products/filterItem";
import { filterCategories } from "@/data/filterCategory";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortByList } from "@/data/filterCategory";

function Filter() {
  return (
    <div className="my-6 p-6 border flex justify-between items-center gap-4">
      <div className="leftside flex justify-start items-center gap-4">
        <SlidersHorizontal />
        <div className="flex gap-4">
          {filterCategories.map((category, index) => (
            <FilterItem key={index} category={category} />
          ))}
        </div>
      </div>
      <div className="rightside">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={sortByList.name} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{sortByList.name}</SelectLabel>
              {sortByList.options.map((opt) => (
                <SelectItem className="" key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Filter;
