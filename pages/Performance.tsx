import peakperf_image from "../assets/peakperf_image.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Performance = () => {
    return (
        <div id="performance" className="flex flex-col items-center justify-between h-full max-w-6xl mx-10 sm:space-x-16 sm:flex-row sm:mt-14 xl:mx-auto">
            <div className="mt-10 sm:max-w-[70vw] sm:mt-0">
                <h1 className="text-4xl font-bold font-lexend xl:text-6xl">
                    <p>Tap into Your Peak <br /><span className="text-primary">Performance</span></p>
                </h1>
                <p className="mt-5 text-body text-sm xl:text-md max-w-[600px]">
                    We believe that everyone deserves a healthy body and mind. We cater to all and our services are designed to help you tap into your peak performance and achieve new heights.
                    <br /><br />
                    We emphasize addressing the underlying causes of issues to create lasting improvements in your health and well-being.
                </p>

            </div>
            <Image
                src={peakperf_image}
                alt="logo"
                title="Hero Image"
                className="mt-5 rounded-md sm:mt-0 rooun h-1/2"
            />
        </div>
    );
};

export default Performance;
