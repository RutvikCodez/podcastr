"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Hamburger from "@/public/icons/hamburger.svg";
import Logo from "@/public/icons/logo.svg";
import Link from "next/link";
import { leftSidebarLinkData } from "./LeftSidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Hamburger />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-black-1 text-white-1"
        >
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-1 pl-4"
          >
            <Logo />
            <h1 className="text-2 font-extrabold text-white-1 ml-2">
              Podcastr
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex flex-col gap-6 h-full">
                {leftSidebarLinkData.map(({ image, label, route }, index) => {
                  const isActive =
                    pathname === route || pathname.startsWith(route + "/");
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={route}
                        className={cn(
                          "flex gap-3 items-center max-lg:px-4 justify-start py-4",
                          {
                            "bg-nav-focus border-r-4 border-orange-1": isActive,
                          }
                        )}
                      >
                        {image}
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
