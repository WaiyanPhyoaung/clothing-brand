import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MenuDetailsType } from "@/data/menu";
import paths from "@/app/paths";

const container = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    scaleY: 0,
    transition: { when: "afterChildren", duration: 0.2 },
  },
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
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

type SubMenuType = {
  shouldOpen: boolean;
  setIsOpen: (args: boolean) => void;
  activeMenuDetails: MenuDetailsType[];
  navigate: (args: string) => void;
};

const SubMenu = ({
  shouldOpen,
  setIsOpen,
  activeMenuDetails,
  navigate,
}: SubMenuType) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {shouldOpen && (
          <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(2px)",
              transition: { duration: 2 },
            }}
            exit={{ display: "none", transition: { duration: 0.1 } }}
            className={`fixed left-0 -z-10 h-full w-full 
          `}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              exit="exit"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className={` fixed left-0 w-full origin-top bg-white

    `}
            >
              <motion.div
                key={activeMenuDetails[0]?.name}
                variants={child}
                className={`container flex origin-top items-start justify-center gap-16 duration-300 `}
              >
                {activeMenuDetails.map((menuDetails) => (
                  <div className="flex-col py-8" key={menuDetails.name}>
                    {/* dropdown title link */}
                    <Link
                      className=""
                      href={paths.category(menuDetails.link)}
                      onClick={() => navigate(paths.category(menuDetails.link))}
                    >
                      {menuDetails.name}
                    </Link>
                    <ul className="mt-4 flex flex-col">
                      {menuDetails.children &&
                        menuDetails.children.map((child) => (
                          // dropdown sub links
                          <Link
                            className="py-1 text-gray-700 hover:text-black"
                            key={child.name}
                            href={paths.category(child.link)}
                            onClick={() => navigate(paths.category(child.link))}
                          >
                            {child.name}
                          </Link>
                        ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubMenu;
