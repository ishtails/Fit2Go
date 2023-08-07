'use client'
import React from 'react'
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia"

type Props = {
    scrollRef: React.RefObject<HTMLDivElement>,
    scrollBy: number
}

const NavigationArrows = ({ scrollRef, scrollBy }: Props) => {
    return (
        <div className="self-center space-x-10 flex">
            <button className="bg-white p-2 shadow-md rounded-full hover:bg-primary transition-all" onClick={() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollLeft -= scrollBy;
                }
            }} >
                <LiaAngleLeftSolid className="transition-all  hover:text-white" />
            </button>
            <button className="bg-white p-2 shadow-md rounded-full hover:bg-primary transition-all" onClick={() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollLeft += scrollBy;
                }
            }} >
                <LiaAngleRightSolid className="transition-all hover:text-white" />
            </button>
        </div>
    )
}

export default NavigationArrows