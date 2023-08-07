import React from 'react'
import Image from "next/image"
import test_quote from "../assets/test_quote.svg"

type Props = {
    key: string,
    author: string,
    designation: string,
    description: string,
    imageURL: string
}

const Testimonial = ({ author, designation, description, imageURL }: Props) => {
    return (
        <div className="bg-pale-green/20 py-10 md:px-10 flex flex-col md:flex-row md:justify-between md:divide-x-2 space-x-2 items-center max-w-[640px] flex-shrink-0 snap-center rounded-xl divide-y-2 md:divide-y-0">
            <div className="relative pb-5 md:pb-0 md:pr-5">
                <Image src={imageURL} width={120} height={120} alt="Testimonial Image" className="object-cover rounded-full aspect-square" />
                <Image src={test_quote} width={40} alt="Testimonial Image" className="absolute p-3 rounded-full bg-primary -top-2 aspect-square" />
            </div>
            <div className="md:pl-10 w-[75%] pt-5 md:pt-0">
                <h3 className="text-xl font-semibold">{author}</h3>
                <p className="text-sm">{designation}</p>
                <p className="mt-2 max-w-[75vw] md:max-w-full text-sm text-zinc-700">{description}</p>
            </div>
        </div>
    )
}

export default Testimonial