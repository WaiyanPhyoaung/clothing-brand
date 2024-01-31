export type MenuDetailsType = {
  name: string;
  link: string;
  children?: MenuDetailsType[];
};

export type MenuType = {
  id: string;
  name: string;
  link: string;
  menuDetails: MenuDetailsType[];
};

export const mockMenu: MenuType[] = [
  {
    id: "1",
    name: "New",
    link: "#",
    menuDetails: [
      {
        name: "features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 2",
            link: "#",
          },
          {
            name: "air force 3",
            link: "#",
          },
          {
            name: "air force 4",
            link: "#",
          },
        ],
      },
      {
        name: "trending",
        link: "#",
        children: [
          {
            name: "polo shirts",
            link: "#",
          },
          {
            name: "polo shirts1",
            link: "#",
          },
          {
            name: "polo shirts2",
            link: "#",
          },
          {
            name: "polo shirts3",
            link: "#",
          },
        ],
      },
      {
        name: "Latest",
        link: "#",
        children: [
          {
            name: "latest 1",
            link: "#",
          },
          {
            name: "latest 2",
            link: "#",
          },
          {
            name: "letest 3",
            link: "#",
          },
          {
            name: "latest 4",
            link: "#",
          },
        ],
      },
      {
        name: "Popular",
        link: "#",
        children: [
          {
            name: "popular 1",
            link: "#",
          },
          {
            name: "popular 2",
            link: "#",
          },
          {
            name: "popular 3",
            link: "#",
          },
          {
            name: "popular 4",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Latest",
    link: "#",
    menuDetails: [
      {
        name: "Shop All new features",
        link: "#",
        children: [
          {
            name: "second 1",
            link: "#",
          },
          {
            name: "second 2",
            link: "#",
          },
          {
            name: "second 3",
            link: "#",
          },
          {
            name: "second 4",
            link: "#",
          },
        ],
      },
      {
        name: "blocker",
        link: "#",
        children: [
          {
            name: "sodicid 3",
            link: "#",
          },
          {
            name: "jordan 1",
            link: "#",
          },
          {
            name: "jordan 2",
            link: "#",
          },
          {
            name: "jordan 3",
            link: "#",
          },
          {
            name: "jordane 4",
            link: "#",
          },
          {
            name: "jordan 5",
            link: "#",
          },
          {
            name: "jordan 6",
            link: "#",
          },
          {
            name: "jordan 7",
            link: "#",
          },
          {
            name: "jordan 8",
            link: "#",
          },
          {
            name: "jordan 9",
            link: "#",
          },
        ],
      },
      {
        name: "moncisk kkhhsoefe ",
        link: "#",
        children: [
          {
            name: "see3 fesf",
            link: "#",
          },
          {
            name: "sefe fsefwf",
            link: "#",
          },
          {
            name: "sefefesf",
            link: "#",
          },
        ],
      },
      {
        name: "gewin aElsif",
        link: "#",
        children: [
          {
            name: "saef3333 sfsef",
            link: "#",
          },
          {
            name: "sdnn brgs esf3333 sefsefefsf",
            link: "#",
          },
          {
            name: "1",
            link: "#",
          },
          {
            name: "socia 1",
            link: "#",
          },
          {
            name: "sdnn regfia",
            link: "#",
          },
          {
            name: "aee df 1",
            link: "#",
          },
          {
            name: "airse33  1",
            link: "#",
          },
          {
            name: "sdnn hla333 sefsefefsf",
            link: "#",
          },
          {
            name: "1ee ssds",
            link: "#",
          },
          {
            name: "aiwr rr 1",
            link: "#",
          },
        ],
      },
      {
        name: "Scripts",
        link: "#",
        children: [
          {
            name: "asdf 3",
            link: "#",
          },
          {
            name: "tyhasfs 1",
            link: "#",
          },
          {
            name: "pollyy 1",
            link: "#",
          },
          {
            name: "asseewwq 1",
            link: "#",
          },
          {
            name: "qbqbqb 1",
            link: "#",
          },
          {
            name: "berbew 1",
            link: "#",
          },
          {
            name: "aytatt 1",
            link: "#",
          },
          {
            name: "kjargr 1",
            link: "#",
          },
          {
            name: "uukdgdr 1",
            link: "#",
          },
          {
            name: "eenenen 1",
            link: "#",
          },
        ],
      },
      {
        name: "moncisk kuueooefe ",
        link: "#",
        children: [
          {
            name: "see3 fesf",
            link: "#",
          },
          {
            name: "sefe rerer",
            link: "#",
          },
          {
            name: "yyyyyuuu",
            link: "#",
          },
        ],
      },
      {
        name: "gewin aiseuif",
        link: "#",
        children: [
          {
            name: "ollult sfsef",
            link: "#",
          },
          {
            name: "sdnn argsg",
            link: "#",
          },
          {
            name: "prlrlrrlr",
            link: "#",
          },
          {
            name: "jaje4ge",
            link: "#",
          },
          {
            name: "sdemm ee4",
            link: "#",
          },
          {
            name: "1w44 ged",
            link: "#",
          },
          {
            name: "we4jj weg",
            link: "#",
          },
          {
            name: "sdnwm ret",
            link: "#",
          },
          {
            name: "1tyryee",
            link: "#",
          },
          {
            name: "eh5ebhw",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Popular",
    link: "#",
    menuDetails: [
      {
        name: "really",
        link: "#",
        children: [
          {
            name: "Horans 1",
            link: "#",
          },
          {
            name: "Horans 2",
            link: "#",
          },
          {
            name: "Horans 3",
            link: "#",
          },
          {
            name: "Horans 4",
            link: "#",
          },
        ],
      },
      {
        name: "GOAT",
        link: "#",
        children: [
          {
            name: "goat 1",
            link: "#",
          },
          {
            name: "goat 2",
            link: "#",
          },
          {
            name: "goat 3",
            link: "#",
          },
          {
            name: "goat 4",
            link: "#",
          },
        ],
      },
      {
        name: "Affordable",
        link: "#",
        children: [
          {
            name: "affordable 1",
            link: "#",
          },
          {
            name: "affordable 2",
            link: "#",
          },
          {
            name: "affordable 3",
            link: "#",
          },
          {
            name: "affordable 4",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Best Prices",
    link: "#",
    menuDetails: [
      {
        name: "Shop All best prices",
        link: "#",
        children: [
          {
            name: "best 1",
            link: "#",
          },
          {
            name: "best 2",
            link: "#",
          },
          {
            name: "best 3",
            link: "#",
          },
          {
            name: "best 4",
            link: "#",
          },
        ],
      },
      {
        name: "221b",
        link: "#",
        children: [
          {
            name: "baker st",
            link: "#",
          },
          {
            name: "baker 1",
            link: "#",
          },
          {
            name: "baker 2",
            link: "#",
          },
          {
            name: "baker 3",
            link: "#",
          },
          {
            name: "baker 4",
            link: "#",
          },
          {
            name: "baker 5",
            link: "#",
          },
          {
            name: "baker 6",
            link: "#",
          },
          {
            name: "baker 7",
            link: "#",
          },
        ],
      },
      {
        name: "moncisk kkhhsoefe ",
        link: "#",
        children: [
          {
            name: "see3 fesf",
            link: "#",
          },
          {
            name: "sefe fsefwf",
            link: "#",
          },
          {
            name: "sefefesf",
            link: "#",
          },
        ],
      },
      {
        name: "gewin aiseuif",
        link: "#",
        children: [
          {
            name: "hhaesg sfsef",
            link: "#",
          },
          {
            name: "sdnn brgs g",
            link: "#",
          },
          {
            name: "tyysgsg",
            link: "#",
          },
          {
            name: "jajeee ",
            link: "#",
          },
          {
            name: "molise",
            link: "#",
          },
          {
            name: "lkl1",
            link: "#",
          },
          {
            name: "youtuhesg",
            link: "#",
          },
          {
            name: "bositoon ",
            link: "#",
          },
          {
            name: "tjkaoew",
            link: "#",
          },
          {
            name: "kkaopke",
            link: "#",
          },
        ],
      },
    ],
  },
];
