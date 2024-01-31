import BreadCrumb from "@/components/breadcrumb";
import Filter from "@/components/products/filter";
import ProductCard from "@/components/products/product-card";

export default function Products() {
  return (
    <div className="container w-full mt-[100px]">
      <BreadCrumb />
      <div className="w-full mt-4">
        <h1 className="text-3xl font-semibold">Products</h1>
        <Filter />
        <div className="grid grid-cols-4 gap-8">
          {Array(20)
            .fill(" ")
            .map((_, index) => {
              return <ProductCard key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
