import hero_image from "@/assets/hero_image.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

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
        <button className="flex items-center px-4 py-2 space-x-2 text-white transition-all rounded-full bg-primary hover:bg-[#10a58f]">
          <p className="font-medium">Get in touch</p>
          <AiOutlineArrowRight />
        </button>
      </div>
      <Image
        src={hero_image}
        alt="logo"
        title="Hero Image"
        className="w-[45vh] sm:w-[50%] mt-5 sm:mt-0"
      />
    </div>
  );
};

export default Hero;
