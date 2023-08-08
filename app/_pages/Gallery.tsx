'use client'
import Image from 'next/image'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useEffect, useRef, useState } from "react"
import { PiHandSwipeLeftLight } from 'react-icons/pi'
import NavigationArrows from "@/components/NavigationArrows"
import { urlFor } from "@/helpers/helpers"

type Props = {
  array: {
    images: {
      asset: {
        _ref: string,
        _type: string,
      }
      alt: string
    }[]
  }[]
}

const Gallery = ({ array } : Props) => {
  const [device, setDevice] = useState<deviceType>("iPhone 8");
  const [landscape, setLandscape] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      setDevice("MacBook Pro");
    } else {
      setDevice("iPhone 8");
    }

    if (screenWidth < 768) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center h-full mx-auto mt-24">
      <div className="flex flex-col items-center justify-center -mb-12 md:-mb-0 lg:-mb-8">
        <h2 className="text-5xl font-bold text-center font-lexend xl:text-6xl">
          Picture Gallery
        </h2>
        <span className="flex items-center justify-center mt-2 text-sm text-body lg:text-md xl:text-lg space-x-1">
          <p>Swipe to see more </p>
          <PiHandSwipeLeftLight className="w-5 h-5" />
        </span>
      </div>

      <DeviceFrameset device={device} color="black" landscape={landscape} zoom={0.8}>
        <div ref={galleryRef} className="flex flex-col h-[670px] md:h-fit overflow-x-scroll md:flex-row scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {array[0].images.map((item) => (
            <Image
              key={item.alt}
              src={urlFor(item.asset).url()}
              width={600}
              height={600}
              alt={item.alt}
              className="flex-shrink-0 border-8 object-cover border-Slate-darker snap-center" />
          ))}
        </div>
      </DeviceFrameset>

      <div className="hidden md:block lg:-mt-8">
        <NavigationArrows scrollRef={galleryRef} scrollBy={500} />
      </div>
    </div >
  )
}

export default Gallery