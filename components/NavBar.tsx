'use client'
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div className="z-0 flex items-center justify-between max-w-6xl py-5 mx-10 xl:mx-auto ">
      <Image src={logo} alt="logo" width={100} className="" />

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
          to="services"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <p className="transition cursor-pointer hover:text-primary">Services</p>
        </Link>
        <Link to="support" spy={true} smooth={true} offset={-10} duration={700}>
          <p className="transition cursor-pointer hover:text-primary">Contact</p>
        </Link>
      </div>
      <Link to="support" spy={true} smooth={true} offset={-10} duration={700}>
        <p className="px-4 py-1 text-white transition rounded-lg cursor-pointer bg-primary hover:animate-pulse">Get in touch</p>
      </Link>
    </div>
  );
};

export default NavBar;
