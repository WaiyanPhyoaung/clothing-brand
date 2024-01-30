import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MenuDetailsType } from "@/data/menu";

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
  setIsOpen: (arg: boolean) => void;
  activeMenuDetails: MenuDetailsType[];
};

const SubMenu = ({ shouldOpen, setIsOpen, activeMenuDetails }: SubMenuType) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {shouldOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            exit="exit"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={` fixed left-0 w-full bg-white origin-top
     
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
                          className="py-1 text-gray-700 hover:text-black"
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldOpen ? 1 : 0 }}
        className={`fixed left-0 w-full h-full bg-black/20 backdrop-blur-[2px] -z-10 
`}
      />
    </>
  );
};

export default SubMenu;
