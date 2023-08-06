import Image from "next/image"
import { BsLinkedin } from "react-icons/bs"
import { BiLogoInstagramAlt } from "react-icons/bi"

type Props = {
    name: string,
    profession: string,
    image: any,
    linkedin?: string,
    instagram?: string
}

const TeamCard = ({ name, profession, image, linkedin, instagram }: Props) => {
    return (
        <div className="flex flex-col items-center rounded-lg shadow-lg">
            <Image className="rounded-t-lg w-fit" src={image} alt="anush shukla" />
            <h3 className="mt-5 text-lg font-bold sm:text-xl">{name}</h3>
            <p className="mb-4 text-body">{profession}</p>
            <div className="flex justify-center -mt-2 mb-3 space-x-4">
                {instagram && (
                    <a href={instagram} target="_blank">
                        <BiLogoInstagramAlt className="-ml-1 w-[32px] h-10 text-primary" />
                    </a>
                )}
                {linkedin && (
                    <a href={linkedin} target="_blank">
                        <BsLinkedin className="w-[24px] h-10 text-primary" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default TeamCard