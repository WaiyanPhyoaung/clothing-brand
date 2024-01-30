"use client";

import * as React from "react";
import Link from "next/link";
import { User, ShoppingBag } from "lucide-react";
import useScrollHide from "@/hooks/useShowHide";
import { mockMenu } from "@/data/menu";
import Menu from "./menu";

export default function Navbar() {
  const { isVisible } = useScrollHide(20);

  return (
    <header
      className={`fixed w-full left-0 font-medium bg-white duration-300 z-[1000] ${
        isVisible ? "top-0" : "-top-full"
      }`}
    >
      <div className="relative z-10">
        <div className="container flex justify-between items-center z-[1000]">
          <div className="w-1/5">Logo</div>
          <nav className="relative">
            <Menu menuData={mockMenu} />
          </nav>

          <div className="w-1/5 flex justify-end items-center gap-5 ">
            <input
              type="text"
              placeholder="Search"
              className="h-8 flex w-[200px] rounded border-2 focus-visible:border-primary bg-background px-3 py-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
      </div>
    </header>
  );
}
