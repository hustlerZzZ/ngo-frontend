"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/HungerToHope.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import MobileNavItems from "@/components/MobileNavItems";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex flex-col md:hidden justify-between items-center bg-white border-cyan-950 shadow-xl p-6 ">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src={logo} height={50} width={50} alt="logo" />
        </Link>

        <div>
          <button
            onClick={() => setIsActive((prev) => !prev)}
            aria-label={isActive ? "Close menu" : "Open menu"}
            className="focus:outline-none"
          >
            {isActive ? (
              <IoMdClose className="text-2xl text-black" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-black" />
            )}
          </button>
        </div>
      </div>

      {isActive && (
        <div className="w-full p-4 bg-white shadow-lg">
          <MobileNavItems />
        </div>
      )}
    </nav>
  );
}