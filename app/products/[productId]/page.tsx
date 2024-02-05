import BreadCrumb from "@/components/breadcrumb";
import ProductDetailsImage from "@/components/productDetails/productDetailsImage";
import ProductDetailsInfo from "@/components/productDetails/productDetailsInfo";

import demoImg from "@/public/trending1.jpg";
import demoImg2 from "@/public/trending2.jpg";
import demoImg3 from "@/public/trending3.jpg";
import black from "@/public/products/black.avif";
import white from "@/public/products/white.avif";
import red from "@/public/products/red.avif";

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
function ProductDetails({ params }: ProductDetailsType) {
  return (
    <div className="container">
      <div className="my-24 ">
        <BreadCrumb breadcrumb={`Home / ${params.productId}`} />
      </div>
      <div className="flex justify-center items-start gap-16">
        <div className="flex-grow sticky top-16">
          <ProductDetailsImage imageLists={demo} />
        </div>
        <div className="w-7/12">
          <ProductDetailsInfo colorLists={colorLists} />
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
