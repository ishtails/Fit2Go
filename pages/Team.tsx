import TeamCard from "@/components/TeamCard"
import team_1 from "@/assets/Anush.jpeg"

const Team = () => {
    return (
        <div id="team" className="h-full max-w-6xl mx-10 sm:mt-10 xl:mx-auto">
            <h2 className="text-5xl font-bold font-lexend xl:text-6xl">
                Our Team
            </h2>
            <span className="justify-center ml-1 text-sm text-body lg:text-md xl:text-lg">
                Meet the team that makes it all possible
            </span>
            <div className="grid grid-cols-1 gap-14 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                <TeamCard name="Anush Shukla" profession="Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
                <TeamCard name="Anush Shukla" profession="Physiotherapist" image={team_1} linkedin="https://www.linkedin.com/in/anush-shukla-688729206/" instagram="https://www.instagram.com/tikks02/" />
            </div>
        </div>
    )
}

export default Team