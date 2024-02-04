"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type ProductDetailsImageProps = {
  imageLists: { src: string | StaticImageData; alt: string }[];
};

function ProductDetailsImage({ imageLists = [] }: ProductDetailsImageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const moveImage = (direction: string) => {
    setActiveImageIndex((prev) => {
      if (direction === "left") {
        return prev === 0 ? imageLists.length - 1 : prev - 1;
      } else {
        return prev === imageLists.length - 1 ? 0 : prev + 1;
      }
    });
  };
  return (
    <div className="flex justify-start items-start gap-4">
      <div className="flex flex-col gap-2">
        {imageLists.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveImageIndex(index)}
            className={`relative rounded overflow-hidden before:content-[''] before:absolute before:inset-0 ${
              activeImageIndex === index
                ? "before:bg-black/30"
                : "before:bg-transparent"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="w-[60px] h-[60px] object-cover "
            />
          </div>
        ))}
      </div>
      <div className="relative">
        <Image
          src={imageLists[activeImageIndex]?.src}
          alt={imageLists[activeImageIndex]?.alt}
          className="min-h-[300px] rounded"
        />
        <div className="absolute right-6 bottom-6 flex gap-2">
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full"
            onClick={() => moveImage("left")}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full"
            onClick={() => moveImage("right")}
          >
            <ChevronRight className="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsImage;
