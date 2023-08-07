'use client'
import TeamCard from "@/components/TeamCard"
import team_1 from "@/assets/Anush.jpeg"
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia"
import React, { useRef } from "react";
import NavigationArrows from "@/components/NavigationArrows";

const Team = () => {
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
                <TeamCard name="Anush Shukla" profession="Founder / Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Founder / Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Founder / Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Founder / Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Founder / Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Founder / Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
            </div>

            <NavigationArrows scrollRef={teamRef} scrollBy={200}/>
        </div>
    )
}

export default Team