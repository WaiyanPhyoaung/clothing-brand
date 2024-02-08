"use client";

import * as React from "react";
import Link from "next/link";
import { User, ShoppingBag, Search } from "lucide-react";
import useScrollHide from "@/hooks/useShowHide";
import { mockMenu } from "@/data/menu";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NavSearch from "@/components/navbar/navSearch";
import Image from "next/image";
import nextLogo from "@/public/next.svg";
import paths from "@/app/paths";

export default function Navbar() {
  const { isVisible } = useScrollHide({ threshold: 20, topThreshold: 50 });
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <NavSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      <header
        className={`fixed w-[calc(100vw-16px)] left-0 z-[1000]  bg-white font-medium duration-300 ${
          isVisible ? "top-0" : "-top-full"
        }`}
      >
        <div className="relative z-10">
          <div className="container z-[1000] flex items-center justify-between">
            <div className="w-1/5">
              <Link href={paths.home()}>
                <Image src={nextLogo} alt="logo" className="w-20 h-auto" />
              </Link>
            </div>

            <nav className="relative">
              <Menu menuData={mockMenu} />
            </nav>

            <div className="relative flex w-1/5 items-center justify-end ">
              <div className="flex items-center justify-end gap-2">
                <Button
                  onClick={() => setIsSearch(true)}
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <Search />
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <Link href="/user" className="rounded-full p-2 ">
                    <User />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <Link href="/cart" className="rounded-full p-2 ">
                    <ShoppingBag />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
