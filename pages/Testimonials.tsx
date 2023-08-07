'use client'
import Testimonial from "@/components/Testimonial"
import React, { useRef } from "react";
import NavigationArrows from "@/components/NavigationArrows";
import { urlFor } from "@/helpers/helpers";
import { getTestimonials } from "@/sanity/utils";

type Props = {
    array: {
        _id: string,
        author: string,
        designation: string,
        description: string,
        image: any,
    }[],
}

export const getStaticProps = async () => {
  const testimonials = await getTestimonials();
  
    return {
      props: {
        array: testimonials,
      },
    };
  }

const Testimonials = ({ array }: Props) => {
    const testimonialsRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col items-center h-full pb-4 mx-10 mt-24 xl:mx-auto">
            <div className="flex flex-col items-center justify-center mb-10">
                <h2 className="text-5xl font-bold text-center font-lexend xl:text-6xl">
                    Testimonials
                </h2>
                <span className="justify-center mt-1 text-sm text-body lg:text-md xl:text-lg">
                    Swipe to see what our users have to say
                </span>
            </div>

            <div ref={testimonialsRef} className="max-w-[95vw] max-h-[75vh] flex overflow-x-scroll space-x-10 scrollbar-hide mb-5 scroll-smooth px-24 snap-x snap-mandatory">
                {array.map((testimonial: any) => (
                    <Testimonial
                        key={testimonial._id}
                        author={testimonial.author}
                        designation={testimonial.designation}
                        description={testimonial.description}
                        imageURL={urlFor(testimonial.image).width(500).height(500).url()}
                    />
                ))}
            </div>

            <NavigationArrows scrollRef={testimonialsRef} scrollBy={400} />
        </div >
    )
}

export default Testimonials