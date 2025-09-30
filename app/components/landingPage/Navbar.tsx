"use client";

import Image from "next/image";
import Link from "next/link";
import Logolight from "@/public/logo.png";
import Logodark from "@/public/logodark.png";

import { ThemeToggle } from "../dashboard/ThemeToggle";
// import { AuthModal } from "./AuthModal";
import { LanguageToggle } from "../dashboard/LanguageToggle";
import { useTheme  } from "next-themes";
export function Navbar() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
      <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
        <Link href="/" className="flex items-center gap-2">

          <Image src={resolvedTheme === "dark" ? Logodark : Logolight} className='size-10' alt="Logo" />
          {/* <div>{resolvedTheme+''}</div> */}
          <h4 className="text-3xl font-semibold">
            OMAR<span className="text-primary">ELGENDY</span>
          </h4>
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      <nav className="hidden md:flex md:justify-end md:space-x-4">
        <ThemeToggle />
        <LanguageToggle />
        {/* <AuthModal /> */}
      </nav>
    </div>
  );
}
