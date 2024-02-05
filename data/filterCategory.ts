enum Prices {
  belowOne,
  oneToThree,
  threeToFive,
  fiveToEight,
  aboveEight,
}
export enum Sizes {
  xs,
  s,
  m,
  l,
  xl,
  twoxl,
  threexl,
}
enum Colors {
  white,
  black,
  green,
  brown,
  red,
}

enum SortBy {
  asc = "asc",
  des = "des",
  newest = "newest",
  bestSeller = "bestSeller",
}
export type Option = {
  label: string;
  value: any;
};
export type FilterCategory = {
  name: string;
  options: Option[];
};

export const filterCategories: FilterCategory[] = [
  {
    name: "price",
    options: [
      { label: "0 - 10000", value: Prices.belowOne },
      { label: "10000 - 30000", value: Prices.oneToThree },
      { label: "30000 - 50000", value: Prices.threeToFive },
      { label: "50000 - 80000", value: Prices.fiveToEight },
      { label: "80000 and up", value: Prices.aboveEight },
    ],
  },
  {
    name: "size",
    options: [
      { label: "s", value: Sizes.s },
      { label: "m", value: Sizes.m },
      { label: "lg", value: Sizes.l },
      { label: "xl", value: Sizes.xl },
      { label: "2xl", value: Sizes.twoxl },
      { label: "3xl", value: Sizes.threexl },
    ],
  },
  {
    name: "color",
    options: [
      { label: "white", value: Colors.white },
      { label: "black", value: Colors.black },
      { label: "green", value: Colors.green },
      { label: "brown", value: Colors.brown },
      { label: "red", value: Colors.red },
    ],
  },
];

export const sortByList = {
  name: "sort by",
  options: [
    { label: "Price Low To High", value: SortBy.asc },
    { label: "Price High To Low", value: SortBy.des },
    { label: "Newest", value: SortBy.newest },
    { label: "Best Seller", value: SortBy.bestSeller },
  ],
};
