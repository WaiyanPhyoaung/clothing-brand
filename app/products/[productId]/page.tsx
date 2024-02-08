import BreadCrumb from "@/components/breadcrumb";
import ProductDetailsImage from "@/components/productDetails/productDetailsImage";
import ProductDetailsInfo from "@/components/productDetails/productDetailsInfo";

import demoImg from "@/public/trending1.jpg";
import demoImg2 from "@/public/trending2.jpg";
import demoImg3 from "@/public/trending3.jpg";
import black from "@/public/products/black.avif";
import white from "@/public/products/white.avif";
import red from "@/public/products/red.avif";
import RelatedProducts from "@/components/productDetails/relatedProducts";
import { productLists } from "@/data/product";
import ProductDetailsComponent from "@/components/productDetails/productDetailsComponent";
import NextBreadcrumb from "@/components/breadcrumb";

const demo = [
  { src: demoImg, alt: "demo" },
  { src: demoImg2, alt: "demo" },
  { src: demoImg3, alt: "demo" },
  { src: demoImg, alt: "demo" },
  { src: demoImg2, alt: "demo" },
  { src: demoImg3, alt: "demo" },
  { src: demoImg, alt: "demo" },
  { src: demoImg2, alt: "demo" },
];

const colorLists = [
  { src: black, alt: "demo" },
  { src: white, alt: "demo" },
  { src: red, alt: "demo" },
];

type ProductDetailsType = {
  params: { productId: string };
};

function ProductDetailsPage({ params }: ProductDetailsType) {
  return (
    <div className="container">
      <div className="my-24 ">
        <NextBreadcrumb />
      </div>
      <div className="flex justify-center items-start gap-16">
        <div className="flex-grow sticky top-16">
          <ProductDetailsImage imageLists={demo} />
        </div>
        <div className="w-7/12">
          <ProductDetailsInfo colorLists={colorLists} />
        </div>
      </div>
      <div className="my-16">
        <ProductDetailsComponent details={productLists[0].details || []} />
      </div>
      <div className="my-16">
        <RelatedProducts relatedLists={productLists} />
      </div>
    </div>
  );
}
export default ProductDetailsPage;
