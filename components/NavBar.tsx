'use client'
import { Link } from "react-scroll";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-0 flex items-center justify-between max-w-6xl py-5 mx-10 xl:mx-auto ">
      <h1 className="text-primary font-bold text-4xl lg:text-5xl">Fit2Go</h1>

      <div className="items-center hidden space-x-8 font-medium sm:flex lg:space-x-14 text-slate-600">
        <Link
          to="objectives"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <p className="transition cursor-pointer hover:text-primary">About Us</p>
        </Link>
        <Link
          to="gallery"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <p className="transition cursor-pointer hover:text-primary">Gallery</p>
        </Link>
        <Link to="footer" spy={true} smooth={true} offset={-10} duration={700}>
          <p className="transition cursor-pointer hover:text-primary">Contact</p>
        </Link>

        <Link to="services" spy={true} smooth={true} offset={-50} duration={700}>
          <p className="font-medium px-4 py-1 text-white transition rounded-md cursor-pointer bg-primary hover:bg-[#10a58f]">Services</p>
        </Link>
      </div>

      <div className="relative sm:hidden z-50"><MobileMenu /></div>
    </div>
  );
};

export default NavBar;
