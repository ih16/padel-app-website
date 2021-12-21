import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import logo from "../assets/images/logo.png";
import Image from "next/image";

const NavOptions = [
  {
    title: "About the app",
    url: "/#about-the-app",
  },
  {
    title: "Features",
    url: "/#features",
  },
  {
    title: "About us",
    url: "/#about-us",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];

function Navbar() {
  return (
    <div className="container sticky top-2 -mb-40 z-50">
      <div className="w-full font-clash rounded-[4.375rem] bg-white shadow-navbar p-3 flex justify-between items-center">
        <div className="max-w-[5rem] flex">
          <Link href="/#" passHref>
            <Image className="cursor-pointer" src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          {NavOptions.map((option) => (
            <Link key={option.url} href={option.url} passHref>
              <li className="cursor-pointer hover:text-orange-default transition-colors">
                {option.title}
              </li>
            </Link>
          ))}
          <li className="mr-[15px] my-[15]">
            <Button href="/#download" label="Download App" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
