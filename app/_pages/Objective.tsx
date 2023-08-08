import whatwedo_image from "@/assets/whatwedo_image.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Objective = () => {
    return (
        <div id="objectives" className="grid items-center h-full max-w-6xl grid-cols-1 mx-10 mt-24 rounded-lg sm:grid-cols-2 xl:mx-auto md:bg-pale-green/10 sm:gap-10">
            <Image
                src={whatwedo_image}
                alt="logo"
                title="Hero Image"
                className=""
            />
            <div className="lg:w-[80%] space-y-4 mt-10 sm:mt-0 pr-2">
                <h2 className="text-4xl font-bold font-lexend lg:text-5xl xl:text-6xl">
                    What we do...
                </h2>
                <p className="text-body xl:text-lg">
                    At Fit2Go, We are dedicated to making living more comfortable, worthy, and helping individuals achieve their life and career goals. Our integrated approach to sports science sets us apart, offering personalized solutions for injury prevention, rehabilitation, and performance enhancement.                    
                    <span className="hidden md:block"><br />We empower you to tap into your full potential, elevating your performance in sports and physical activities. Partner with us on your journey to excellence.</span>
                </p>
            </div>
        </div>
    );
};

export default Objective;
