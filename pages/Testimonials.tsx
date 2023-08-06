'use client'
import Testimonial from "@/components/Testimonial"
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia"
import React, { useRef } from "react";
import test_image from "@/assets/test_image.jpg";

const testimonials = [
    {
      designation: 'Student',
      description: "The team of experts at Fit2Go not only relieved my pain but also taught me exercises to prevent future issues. I can't thank them enough for giving me a new lease on life.",
      imageURL: test_image,
      _id: '03e34a1d-4f89-4838-9a45-1990ba01ca24',
      author: 'Shrey'
    },
    {
      _id: '9b3d12ae-cb3f-4fc5-9dfa-0e5db58b0d26',
      author: 'Arjun',
      designation: 'Student',
      description: 'These guys helped me in getting into shape and now I can enjoy playing my favorite game just like when I was young',
      imageURL: test_image
    },
    {
      author: 'Kartikay',
      designation: 'Student',
      description: 'I really loved their service. They are pretty awesome!',
      imageURL: test_image,
      _id: 'ed2316b8-cbb0-4afd-a47f-ce144a87b85b'
    }
  ]

const Testimonials = () => {
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