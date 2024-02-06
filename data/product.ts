import demoImg from "@/public/trending1.jpg";
import demoImg2 from "@/public/trending2.jpg";
import demoImg3 from "@/public/trending3.jpg";
import { StaticImageData } from "next/image";

export type ProductType = {
  image: StaticImageData | string;
  title: string;
  description?: string;
  colorCount: number;
  price: number;
  oldPrice?: number;
};
export const productLists: ProductType[] = [
  {
    image: demoImg,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg2,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg3,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg2,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg3,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
  {
    image: demoImg2,
    title: "Nike Sozai",
    description: "This is the beauty of what you would like to get",
    colorCount: 5,
    price: 100000,
    oldPrice: 150000,
  },
];
