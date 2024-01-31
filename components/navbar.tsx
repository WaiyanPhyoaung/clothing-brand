"use client";

import * as React from "react";
import Link from "next/link";
import { User, ShoppingBag } from "lucide-react";
import useScrollHide from "@/hooks/useShowHide";
import { mockMenu } from "@/data/menu";
import Menu from "./menu";

export default function Navbar() {
  const { isVisible } = useScrollHide({ threshold: 20, topThreshold: 50 });

  return (
    <header
      className={`fixed left-0 z-[1000] w-full bg-white font-medium duration-300 ${
        isVisible ? "top-0" : "-top-full"
      }`}
    >
      <div className="relative z-10">
        <div className="container z-[1000] flex items-center justify-between">
          <div className="w-1/5">Logo</div>
          <nav className="relative">
            <Menu menuData={mockMenu} />
          </nav>

          <div className="flex w-1/5 items-center justify-end gap-5 ">
            <input
              type="text"
              placeholder="Search"
              className="focus-visible:border-primary bg-background placeholder:text-muted-foreground flex h-8 w-[200px] rounded border-2 px-3 py-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <div className="flex items-center justify-end gap-2">
              <Link href="/user" className="rounded-full p-2 hover:bg-black/20">
                <User />
              </Link>
              <Link href="/cart" className="rounded-full p-2 hover:bg-black/20">
                <ShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
