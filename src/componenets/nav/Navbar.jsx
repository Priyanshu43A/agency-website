import React, { useState } from "react";
import { Mobile_menu_button } from "./Mobile_menu_button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define your nav links as an array of objects
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Website Design", href: "/website_design" },
    { name: "Product Design", href: "/product_design" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <nav className="w-full h-20 bg-[#000] flex p-5 gap-5 text-[white]">
      <div className="font-bold text-4xl w-[550px] font-roboto">LOGO</div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Mobile_menu_button isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center justify-between w-[650px] gap-[30px]">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="font-bold">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold"
                // className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
      {/* <div className="flex w-[200px] h-9 rounded-md p-2 border border-[#949993] gap-1">
        <input
          type="text"
          placeholder="Search in Site"
          className="w-[160px] h-5 font-bold text-sm leading-5 bg-transparent"
        />
        <svg>
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div> */}
    </nav>
  );
};
