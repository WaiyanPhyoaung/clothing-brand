const paths = {
  home() {
    return "/";
  },
  category(categoryId: string) {
    return `/${categoryId}`;
  },
  productDetails(productId: string) {
    return `/products/${productId}`;
  },
};
export default paths;
