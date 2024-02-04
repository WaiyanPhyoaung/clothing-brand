import BreadCrumb from "@/components/breadcrumb";
import ProductDetailsImage from "@/components/productDetails/productDetailsImage";

import demoImg from "@/public/trending1.jpg";
import demoImg2 from "@/public/trending2.jpg";
import demoImg3 from "@/public/trending3.jpg";
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

type ProductDetailsType = {
  params: { productId: string };
};
function ProductDetails({ params }: ProductDetailsType) {
  return (
    <div className="container">
      <div className="my-24 ">
        <BreadCrumb breadcrumb={`Home / ${params.productId}`} />
      </div>
      <div className="flex justify-center items-start">
        <div className="flex-grow">
          <ProductDetailsImage imageLists={demo} />
        </div>
        <p className="w-5/12">product details</p>
      </div>
    </div>
  );
}
export default ProductDetails;
