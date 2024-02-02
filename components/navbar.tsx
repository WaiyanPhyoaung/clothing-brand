"use client";

import * as React from "react";
import Link from "next/link";
import { User, ShoppingBag, Search } from "lucide-react";
import useScrollHide from "@/hooks/useShowHide";
import { mockMenu } from "@/data/menu";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./ui/input";

export default function Navbar() {
  const { isVisible } = useScrollHide({ threshold: 20, topThreshold: 50 });
  const [isSearch, setIsSearch] = useState(false);
  const ref = useClickOutside(() => setIsSearch(false));

  return (
    <>
      <AnimatePresence>
        {isSearch && (
          <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(2px)",
              transition: { duration: 1 },
            }}
            className="fixed z-[1001]  h-screen w-screen "
          >
            <motion.div
              ref={ref}
              initial={{ y: "-100%" }}
              animate={{
                y: "0",
                transition: { duration: 0.2 },
              }}
              exit={{ y: "-100%", transition: { duration: 0.2 } }}
              className="bg-white h-[30vh]"
            >
              <div className="container flex justify-between pt-4">
                <p className="w-1/6">LOGO</p>
                <Input className="w-3/6" autoFocus />
                <div className="w-1/6 text-right">
                  <Button variant="ghost" onClick={() => setIsSearch(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <header
        className={`fixed w-[calc(100vw-16px)] left-0 z-[1000]  bg-white font-medium duration-300 ${
          isVisible ? "top-0" : "-top-full"
        }`}
      >
        <div className="relative z-10">
          <div className="container z-[1000] flex items-center justify-between">
            <div className="w-1/5">Logo</div>

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
