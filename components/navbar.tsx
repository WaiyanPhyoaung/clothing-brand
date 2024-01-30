"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { User, ShoppingBag } from "lucide-react";

type MenuDetailsType = {
  name: string;
  link: string;
  children?: MenuDetailsType[];
};

type MenuType = {
  id: string;
  name: string;
  link: string;
  menuDetails: MenuDetailsType[];
};

const mockMenu: MenuType[] = [
  {
    id: "1",
    name: "new & featured",
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
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
      {
        name: "features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
      {
        name: "features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
      {
        name: "features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "new & featured",
    link: "#",
    menuDetails: [
      {
        name: "Shop All new features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "jorden 2",
            link: "#",
          },
          {
            name: "simble 2",
            link: "#",
          },
          {
            name: "snokeresf ",
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
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "new & featured",
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
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
      {
        name: "features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
      {
        name: "features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "new & featured",
    link: "#",
    menuDetails: [
      {
        name: "Shop All new features",
        link: "#",
        children: [
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "jorden 2",
            link: "#",
          },
          {
            name: "simble 2",
            link: "#",
          },
          {
            name: "snokeresf ",
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
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
            link: "#",
          },
          {
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
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
            name: "air force 1",
            link: "#",
          },
        ],
      },
    ],
  },
];

const container = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      // delayChildren: 0.5,
    },
  },
  exit: {
    scaleY: 0,
    transition: { when: "afterChildren" },
  },
  // transition={{ type: "tween" }}
};

const child = {
  hidden: { y: -3, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      y: { duration: 0.1 },
    },
  },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export default function Navbar() {
  const [isOpenMenuContent, setIsOpenMenuContent] = useState(false);
  const [activeMenuDetails, setActiveMenuDetails] = useState<MenuDetailsType[]>(
    []
  );
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 20; // Threshold in pixels

      if (currentScrollY > lastScrollY + threshold) {
        // Scrolled down more than 10px
        setIsNavVisible(false);
      } else if (lastScrollY > currentScrollY + threshold) {
        // Scrolled up more than 10px
        setIsNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full left-0 font-medium bg-white duration-300 z-[1000] ${
        isNavVisible ? "top-0" : "-top-full"
      }`}
    >
      <div className="relative z-10">
        <div className="container flex justify-between items-center z-[1000]">
          <div className="w-1/5">Logo</div>
          <nav className="">
            <ul className=" flex justify-center items-center ">
              {mockMenu.map((menu) => (
                <li
                  key={menu.id}
                  onMouseEnter={() => {
                    setIsOpenMenuContent(true);
                    setActiveMenuDetails(() => menu.menuDetails);
                  }}
                  onMouseLeave={() => setIsOpenMenuContent(false)}
                  className="relative"
                >
                  <Link
                    href={menu.link}
                    className="inline-block py-4 px-4 border-b-2 border-transparent hover:border-black"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-1/5 flex justify-end items-center gap-6 ">
            <input
              type="text"
              placeholder="Search"
              className="h-8 flex w-[200px] rounded border-2 focus-visible:border-primary bg-background px-2 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <div className="flex justify-end items-center gap-2">
              <Link href="/user" className="hover:bg-black/20 p-2 rounded-full">
                <User />
              </Link>
              <Link href="/cart" className="hover:bg-black/20 p-2 rounded-full">
                <ShoppingBag />
              </Link>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isOpenMenuContent && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              exit="exit"
              onMouseEnter={() => setIsOpenMenuContent(true)}
              onMouseLeave={() => setIsOpenMenuContent(false)}
              className={` absolute left-0 w-full bg-white origin-top
         
        `}
            >
              <motion.div
                key={activeMenuDetails[0]?.name}
                variants={child}
                className={`container origin-top flex justify-center items-start gap-16 duration-300 `}
              >
                {activeMenuDetails.map((menuDetails) => (
                  <div className="flex-col py-8" key={menuDetails.name}>
                    <Link className=" " href={menuDetails.link}>
                      {menuDetails.name}
                    </Link>
                    <ul className="mt-4 flex flex-col">
                      {menuDetails.children &&
                        menuDetails.children.map((child) => (
                          <Link
                            className="py-1 text-gray-800 hover:text-black"
                            key={child.name}
                            href={child.link}
                          >
                            {child.name}
                          </Link>
                        ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpenMenuContent ? 1 : 0 }}
        className={`fixed w-full h-full bg-black/20 backdrop-blur-[2px] -z-10 
   `}
      ></motion.div>
    </header>
  );
}
