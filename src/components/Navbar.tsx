'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            {/* <div className="flex flex-col text-sm space-y-4">
              <HoveredLink href="/">Home Page</HoveredLink>
            </div> */}
          </MenuItem>
        </Link>

        <Link href={"/services"}>
          <MenuItem setActive={setActive} active={active} item="Our Services">
          </MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact us">
          </MenuItem>
        </Link>


        <Link href={"/signup"}>
          <MenuItem setActive={setActive} active={active} item="Sign up">
          </MenuItem>
        </Link>

        <Link href={"/login"}>
          <MenuItem setActive={setActive} active={active} item="Login">
          </MenuItem>
        </Link>

      </Menu>

    </div>
  )
}
