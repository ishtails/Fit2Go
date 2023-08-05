import Image from "next/image";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { useState } from "react";
const NavBar = () => {
  return (
    <div className="flex py-5 mx-10 justify-between max-w-6xl xl:mx-auto items-center z-0 ">
      <Image src={logo} alt="logo" width={100} height={100} className="" />

      <div className="hidden sm:flex items-center space-x-8 lg:space-x-14 font-medium text-slate-600">
        <Link
          to="objectives"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <p className="cursor-pointer hover:text-primary transition">About Us</p>
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
        >
          <p className="cursor-pointer hover:text-primary transition">Services</p>
        </Link>
        <Link to="support" spy={true} smooth={true} offset={-10} duration={700}>
          <p className="cursor-pointer hover:text-primary transition">Contact</p>
        </Link>
      </div>
      <Link to="support" spy={true} smooth={true} offset={-10} duration={700}>
        <p className="cursor-pointer bg-primary py-1 px-4 text-white rounded-lg hover:animate-pulse transition">Get in touch</p>
      </Link>
    </div>
  );
};

export default NavBar;
