import React, { useState } from "react";
import Link from "next/link";
import { MenuDetailsType, MenuType } from "@/data/menu";
import SubMenu from "./subMenu";
import paths from "@/app/paths";
import { useRouter } from "next/navigation";

const Menu = ({ menuData }: { menuData: MenuType[] }) => {
  const [isOpenMenuContent, setIsOpenMenuContent] = useState(false);
  const [activeMenuDetails, setActiveMenuDetails] = useState<MenuDetailsType[]>(
    []
  );

  const router = useRouter();
  // To close navbar dropdown and page changes
  const navigate = (link: string) => {
    setIsOpenMenuContent(false);
    router.push(link);
  };

  return (
    <div>
      <ul className="flex items-center justify-center ">
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
              href={paths.category(menu.link)}
              onClick={() => navigate(paths.category(menu.link))}
              className="inline-block border-b-2 border-transparent px-4 py-4 hover:border-black"
            >
              {/* links from navbar */}
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
      <SubMenu
        activeMenuDetails={activeMenuDetails}
        setIsOpen={setIsOpenMenuContent}
        shouldOpen={isOpenMenuContent}
        navigate={navigate}
      />
    </div>
  );
};

export default Menu;
