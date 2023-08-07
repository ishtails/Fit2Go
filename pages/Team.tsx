'use client'
import TeamCard from "@/components/TeamCard"
import team_1 from "@/assets/Anush.jpeg"
import React, { useRef } from "react";
import NavigationArrows from "@/components/NavigationArrows";
import { urlFor } from "@/helpers/helpers";

type Props = {
    array: {
        _id: string,
        name: string,
        designation: string,
        image: any,
        linkedin?: string,
        instagram?: string
    }[],
}

const Team = ({ array }: Props) => {
    const teamRef = useRef<HTMLDivElement>(null);
    return (
        <div id="team" className="h-full flex flex-col max-w-6xl mx-10 sm:mt-10 xl:mx-auto">
            <h2 className="text-5xl font-bold font-lexend xl:text-6xl">
                Our Team
            </h2>
            <span className="justify-center ml-1 text-sm text-body lg:text-md xl:text-lg">
                Meet the team that makes it all possible
            </span>
            <div className="max-w-[95vw] max-h-[75vh] flex overflow-x-scroll space-x-10 scrollbar-hide bg-pale-green/10 mb-5 scroll-smooth rounded-xl p-5 snap-x snap-mandatory mt-10 sm:p-10" ref={teamRef}>
                {array.map((member: any) => (
                    <TeamCard 
                    key={member._id} 
                    name={member.name} 
                    designation={member.designation} 
                    imageURL={urlFor(member.image).width(600).height(600).url()}
                    linkedin={member.linkedin}
                    instagram={member.instagram} />
                ))}
            </div>

            <NavigationArrows scrollRef={teamRef} scrollBy={200} />
        </div>
    )
}

export default Team