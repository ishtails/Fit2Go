import React from 'react'
import Image from "next/image"
import test_quote from "../assets/test_quote.svg"
import test_image from "../assets/test_image.jpg"

type Props = {}

const Testimonial = ({ }: Props) => {
    return (
        <div className="bg-pale-green/20 p-10 flex justify-between divide-x-2 space-x-2 items-center max-w-[720px] mt-8">
            <div className="relative pr-5">
                <Image src={test_image} width={120} height={120} alt="Testimonial Image" className="rounded-full" />
                <Image src={test_quote} width={40} height={40} alt="Testimonial Image" className="bg-primary p-3 absolute -top-2 rounded-full aspect-square" />
            </div>
            <div className="pl-5 w-[75%]">
                <h3 className="text-lg font-semibold">Ishani Sharma</h3>
                <p className="">School Teacher</p>
                <p className="text-sm text-zinc-700">I had been dealing with chronic back pain for years, and it was affecting my daily life. When I came across Fit2Go, I decided to give it a try. Their team of experts not only relieved my pain but also taught me exercises to prevent future issues. I can't thank them enough for giving me a new lease on life.
                </p>
            </div>
        </div>
    )
}

export default Testimonial