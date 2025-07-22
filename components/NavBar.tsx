"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownLeftIcon } from "@heroicons/react/16/solid";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState<Boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="stick top-0 z-50  shadow-md w-screen pb-3 ">
      <div className=" flex  w-screen ">
        <Link
          href={"/"}
          className=" p-3  text-blue-700 text-2xl font-bold hover:bg-blue-500"
        >
          My Ecommerse
        </Link>

        <div className="hidden md:flex space-x-5">
          <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
            Products
            <ChevronDownIcon className="inline ml-2 h-4 w-4" />
          </Link>
          <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
            Bussiness Solutions
            <ChevronDownIcon className="inline ml-2 h-4 w-4" />
          </Link>
          <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
            Help Center
            <ChevronDownIcon className="inline ml-2 h-4 w-4" />
          </Link>
          <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
            Pricing
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex fixed top-1 right-5 items-center mt-4 ">
            <Link href={"/"} className="pr-8">
              Log in
            </Link>
            <Button className="rounded-lg bg-blue-600">
              <Link href={"/"}>Get Started </Link>
            </Button>
          </div>

          {/* //on click change to opposite boolean */}
          <Button
            variant="ghost"
            className="md:hidden sticky top-2 right-2"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden  text-left shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li className="block">
              <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
                Products
                <ChevronDownIcon className="inline ml-2 h-4 w-4" />
              </Link>
            </li>
            <li className="block">
              <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
                Bussiness Solutions
                <ChevronDownIcon className="inline ml-2 h-4 w-4" />
              </Link>
            </li>
            <li className="block">
              <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
                Help Center
                <ChevronDownIcon className="inline ml-2 h-4 w-4" />
              </Link>
            </li>
            <li className="block">
              <Link href={"/"} className="text-center pt-3 hover:bg-blue-500">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
