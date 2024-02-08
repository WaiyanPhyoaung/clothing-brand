type ProductDetailsComponentType = {
  details: string[];
  additionalInformation?: { [key in string]: unknown };
};
function ProductDetailsComponent({
  details,
  additionalInformation,
}: ProductDetailsComponentType) {
  return (
    <div className="bg-primary-foreground px-8 py-12">
      <h3 className="text-2xl font-medium mb-8">Product Details</h3>
      <ul>
        {details.map((each, index) => (
          <li className="list-disc list-inside my-2" key={index}>
            {each}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductDetailsComponent;
