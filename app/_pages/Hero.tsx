import hero_image from "@/assets/hero_image.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MAIL_STRING } from "../constants";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col-reverse items-center justify-between h-full max-w-6xl mx-10 sm:flex-row sm:mt-14 xl:mx-auto">
      <div className="sm:w-[40%] lg:w-[35%] space-y-4 mt-10 sm:mt-0">
        <h1 className="text-5xl font-bold font-lexend xl:text-7xl">
          <p>Keep Your Body <span className="text-primary">Fit <span className="text-black">&</span> Strong</span></p>

        </h1>
        <p className="text-xl text-body">
          Quality and Holistic Health Services for Everyone
        </p>
        <Link href={MAIL_STRING} target="_blank" className="flex items-center px-4 py-2 space-x-2 text-white transition-all rounded-full w-fit bg-primary hover:bg-[#10a58f]" aria-label="Get in touch">
          <p className="font-medium">Get in touch</p>
          <AiOutlineArrowRight />
        </Link>
      </div>
      <Image
        src={hero_image}
        alt="logo"
        title="Hero Image"
        priority={true}
        className="w-[45vh] sm:w-[45%] mt-5 sm:mt-0"
      />
    </div>
  );
};

export default Hero;
