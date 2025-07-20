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
      if (window.innerWidth >= 770) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="stick top-0 z-50 ">
      <div className="container flex items-center  py-3">
        <Link
          href={"/"}
          className=" p-3 mr-30 text-blue-700 text-2xl font-bold hover:bg-blue-500"
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
          {/* //on click change to opposite boolean */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
          <div className="flex absolute top-0 right-0 p-5 pt-7">
            <Link href={"/"} className="pr-6 pt-1">
              Log in
            </Link>
            <Link href={"/"}>
              <Button className="rounded-lg bg-blue-600">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-black text-right shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link className="block hover:text-blue-600" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block hover:text-blue-600"
                href={"/Products_page"}
              >
                Products page
              </Link>
            </li>
            <li>
              <Link
                className="block hover:text-blue-600"
                href={"/Checkout_page"}
              >
                Checkout page
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
