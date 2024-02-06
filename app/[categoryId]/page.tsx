import BreadCrumb from "@/components/breadcrumb";
import Filter from "@/components/products/filter";
import ProductCard from "@/components/products/productCard";
import { productLists } from "@/data/product";

type CategoriesType = {
  params: { categoryId: string };
};

export default function Categories({ params }: CategoriesType) {
  return (
    <div className="container w-full mt-[100px]">
      <BreadCrumb breadcrumb={params.categoryId} />
      <div className="w-full mt-4">
        <h1 className="text-3xl font-semibold">Products</h1>
        <Filter />
        <div className="grid grid-cols-4 gap-8">
          {productLists.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
