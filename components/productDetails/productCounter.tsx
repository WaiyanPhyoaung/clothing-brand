import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus } from "lucide-react";

type ProductCounterType = {
  onAddToCart: (args: number) => void;
};

const ProductCounter = ({ onAddToCart }: ProductCounterType) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    onAddToCart(count);
    // Reset count if needed
    // setCount(1);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex justify-center items-stretch border rounded overflow-hidden ">
        <Button
          className="border-0 border-r-[1px] rounded-none px-2 h-12"
          variant={"outline"}
          onClick={decrement}
        >
          <Minus className="w-4 h-12 flex justify-center items-center" />
        </Button>

        <p className="text-xl  font-medium w-12 h-12 leading-[48px] text-center ">
          {count}
        </p>

        <Button
          className="border-0 border-l-[1px] rounded-none px-2 h-12"
          variant={"outline"}
          onClick={increment}
        >
          <Plus className="w-4" />
        </Button>
      </div>

      <Button className="flex-1 rounded text-xl py-6" onClick={addToCart}>
        ADD TO CART
      </Button>
      <Button variant={"outline"} className="rounded py-6" onClick={addToCart}>
        <Heart className="w-4" />
      </Button>
    </div>
  );
};

export default ProductCounter;
