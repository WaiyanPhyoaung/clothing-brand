import Image from "next/image";
import Link from "next/link";
import paths from "@/app/paths";
import type { ProductType } from "@/data/product";

function ProductCard(props: ProductType) {
  const { image, title, description, colorCount, price, oldPrice } = props;
  return (
    <Link
      className="inline-block border rounded"
      href={paths.productDetails("1")}
    >
      <Image
        src={image}
        alt="product"
        className="w-full aspect-auto object-cover max-h-[450px]"
      />
      <div className="py-4 px-2 pb-12">
        <h6 className="font-semibold">{title}</h6>
        <p className="font-medium text-secondary-foreground">{description}</p>
        <p>{colorCount} colors</p>
        <span>{price} ks</span>
        <span className="pl-2 text-sm line-through text-primary/40">
          {oldPrice} ks
        </span>
      </div>
    </Link>
  );
}
export default ProductCard;
