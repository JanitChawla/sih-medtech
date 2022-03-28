import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <header className="text-amber-800 bg-orange-400 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>

            <span className="ml-3 text-xl">UDID Registration</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-9 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center font-mono font-semibold text-xl">
            <a className="mr-7 ml-5 hover:text-white">Home</a>
            <a className="mr-7 ml-5 hover:text-white">About Us</a>
            <a className="mr-7 ml-5 hover:text-white">Register</a>
            <a className="mr-7 ml-5 hover:text-white">Contact us</a>
            <a className="mr-7 ml-5 hover:text-white">Donations</a>
            <a className="mr-7 ml-5 hover:text-white">Schemes</a>
            <a className="mr-7 ml-5 hover:text-white">Services</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
