import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-bold text-2xl m-2 px-[100px]">FlashFeed</h1>

        {/* MENU */}
        <ul className="hidden md:flex space-x-6 my-2 px-[100px]">
          <li>
            <a
              className="hover:text-gray-200 cursor-pointer"
              onClick={() => setCategory("technology")}
            >
              Technology
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-200 cursor-pointer"
              onClick={() => setCategory("business")}
            >
              Business
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-200 cursor-pointer"
              onClick={() => setCategory("health")}
            >
              Health
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-200 cursor-pointer"
              onClick={() => setCategory("sports")}
            >
              Sports
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-200 cursor-pointer"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1 my-2">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-700">
          <ul className="flex flex-col space-y-4 p-4">
            {[
              "technology",
              "business",
              "health",
              "sports",
              "entertainment",
            ].map((category) => (
              <li key={category}>
                <a
                  className="hover:text-gray-200 cursor-pointer capitalize"
                  onClick={() => {
                    setCategory(category);
                    setIsOpen(false);
                  }}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
