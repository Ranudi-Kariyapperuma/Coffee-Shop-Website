import React from "react";
import { SiCoffeescript } from "react-icons/si";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Navbar = () => {
  return (
    <div>
      <div>
      <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">CafePulse</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
