'use client'
import Image from 'next/image'
import gallery_image from '@/assets/gallery_image.png'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useEffect, useState } from "react"

type Props = {}

const Gallery = ({ }: Props) => {
  const [device, setDevice] = useState("iPhone 8");
  const [landscape, setLandscape] = useState(true);

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      setDevice("MacBook Pro");
    } else {
      setDevice("iPhone 8");
    }

    if(screenWidth < 768) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  useEffect(() => {
    handleWindowResize(); // Set the initial value on component mount
    window.addEventListener('resize', handleWindowResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div id="testimonial" className="flex flex-col items-center h-full mx-10 mt-24 xl:mx-auto">
      <div className="flex flex-col items-center justify-center xl:-mb-8">
        <h2 className="text-4xl font-bold text-center font-lexend lg:text-5xl xl:text-6xl">
          Picture Gallery
        </h2>
        <span className="justify-center mt-1 text-sm text-body lg:text-md xl:text-lg">
          Swipe to see more
        </span>
      </div>

      <DeviceFrameset device={device} color="black" landscape={landscape} zoom={0.8}>
        <div className="max-h-[80vh] flex flex-col md:flex-row overflow-x-scroll snap-x snap-mandatory scrollbar-hide mb-5">
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate" />
          <Image src={gallery_image} alt="picture" className="flex-shrink-0 object-cover w-[150%] border-8 border-Slate" />
        </div>
      </DeviceFrameset>



    </div >
  )
}

export default Gallery