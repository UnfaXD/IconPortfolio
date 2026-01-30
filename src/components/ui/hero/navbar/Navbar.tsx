"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex-center",
        className,
      )}
    >
      <Menu setActiveAction={setActive}>
        <HoveredLink href="/#">Home</HoveredLink>
        <HoveredLink href="/#About">About</HoveredLink>
        <HoveredLink href="/#Products">Experience</HoveredLink>
        <MenuItem setActiveAction={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Estatify"
              href="https://estatify-web.vercel.app/"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Real Estate Management System"
            />
            <ProductItem
              title="Lunaroot"
              href="https://lunaroot.rw"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Fashion E-commerce Platform"
            />
          </div>
        </MenuItem>
        <HoveredLink href="/#Services">Services</HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
