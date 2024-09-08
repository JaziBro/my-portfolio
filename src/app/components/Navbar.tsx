"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-primary text-textPrimary fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            MyPortfolio
          </span>
        </a>
        <div className="flex md:order-2 space-x-3">
          <button
            type="button"
            className="text-white bg-accent hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {/* Icon */}
          </button>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-primary md:flex-row md:space-x-8 md:mt-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <span className="block py-2 px-3 text-white hover:text-accent">
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
