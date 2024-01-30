import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MenuDetailsType, MenuType } from "@/data/menu";
import SubMenu from "./subMenu";

const Menu = ({ menuData }: { menuData: MenuType[] }) => {
  const [isOpenMenuContent, setIsOpenMenuContent] = useState(false);
  const [activeMenuDetails, setActiveMenuDetails] = useState<MenuDetailsType[]>(
    []
  );
  return (
    <div>
      <ul className=" flex justify-center items-center ">
        {menuData.map((menu) => (
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
      <SubMenu
        activeMenuDetails={activeMenuDetails}
        setIsOpen={setIsOpenMenuContent}
        shouldOpen={isOpenMenuContent}
      />
    </div>
  );
};

export default Menu;
