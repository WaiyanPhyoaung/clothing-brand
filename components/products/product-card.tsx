import Image from "next/image";
import product1 from "@/public/products/product1.avif";
import Link from "next/link";
import paths from "@/app/paths";

function ProductCard() {
  return (
    <Link href={paths.productDetails("1")}>
      <Image
        src={product1}
        alt="product"
        className="w-full aspect-auto object-cover max-h-[450px]"
      />
      <div className="my-4">
        <h6 className="font-semibold">Nike Zenvy</h6>
        <p className="font-medium text-secondary-foreground">
          Men gentle supports wasited 7/8 leggings
        </p>
        <p>5 colors</p>
        <span>100000 MMK</span>
        <span className="pl-4 text-sm">100000 MMK</span>
      </div>
    </Link>
  );
}
export default ProductCard;
