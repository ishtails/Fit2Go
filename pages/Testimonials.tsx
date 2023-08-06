'use client'
import Testimonial from "@/components/Testimonial"
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia"
import React, { useRef } from "react";

const Testimonials = ({ testimonials }: { testimonials: any }) => {
    const testimonialsRef = useRef<HTMLDivElement>(null);
    
    return (
        <div className="flex flex-col items-center h-full mx-10 mt-24 xl:mx-auto border-b-2 pb-4">
            <div className="flex flex-col items-center justify-center mb-10">
                <h2 className="text-5xl font-bold text-center font-lexend xl:text-6xl">
                    Testimonials
                </h2>
                <span className="justify-center mt-1 text-sm text-body lg:text-md xl:text-lg">
                    Swipe to see what our users have to say
                </span>
            </div>

            <div ref={testimonialsRef} className="max-w-[95vw] max-h-[75vh] flex flex-col md:flex-row overflow-x-scroll md:space-x-10 xl:space-x-10 scrollbar-hide space-y-10 md:space-y-0 mb-5 scroll-smooth">
                {testimonials.map((testimonial: any) => (
                    <Testimonial
                        key={testimonial._id}
                        author={testimonial.author}
                        designation={testimonial.designation}
                        description={testimonial.description}
                        imageURL={testimonial.imageURL}
                    />
                ))}
            </div>

            <div className="hidden md:flex space-x-8">
                <button onClick={() => {
                    if (testimonialsRef.current) {
                        testimonialsRef.current.scrollLeft += 640;
                    }
                }} >
                    <LiaAngleLeftSolid className="hover:text-primary transition-all" />
                </button>
                <button onClick={() => {
                    if (testimonialsRef.current) {
                        testimonialsRef.current.scrollLeft += 640;
                    }
                }} >
                    <LiaAngleRightSolid className="hover:text-primary transition-all" />
                </button>
            </div>

        </div >
    )
}

export default Testimonials