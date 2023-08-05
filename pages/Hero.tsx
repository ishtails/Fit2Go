import hero_image from "../assets/hero_image.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="h-full flex flex-col-reverse sm:flex-row sm:mt-14 items-center justify-between mx-10 xl:mx-auto max-w-6xl">
      <div className="sm:w-[40%] lg:w-[35%] space-y-4 mt-10 sm:mt-0">
        <h1 className="font-lexend font-bold text-5xl xl:text-7xl">
          <p>Keep Your Body <span className="text-primary">Fit <span className="text-black">&</span> Strong</span></p>

        </h1>
        <p className="text-body text-xl">
          Quality and Holistic Health Services for Everyone
        </p>
        <button className="flex items-center space-x-2 bg-primary rounded-full text-white py-2 px-4 transition-all hover:animate-pulse">
          <p>Get in touch</p>
          <AiOutlineArrowRight />
        </button>
      </div>
      <Image
        src={hero_image}
        alt="logo"
        title="Hero Image"
        className="sm:w-[50%] mt-5 sm:mt-0"
      />
    </div>
  );
};

export default Hero;
