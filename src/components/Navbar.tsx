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

            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col text-sm space-y-4">
                <HoveredLink href="/home">Home Page</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Our Services">
            <div className="flex flex-col text-sm space-y-4">
              <HoveredLink href="/services">All Services</HoveredLink>
            </div>
            </MenuItem>

            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col text-sm space-y-4">
            <HoveredLink href="/contact">Contact us</HoveredLink>
            </div>
            </MenuItem>
            </Link>

        </Menu>
        
    </div>
  )
}
