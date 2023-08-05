import Image from "next/image"

type Props = {
    title: string,
    description: string,
    image: string
}

const Service = ({ title, description, image }: Props) => {
    return (
        <div className="rounded-lg shadow-lg border p-8 flex flex-col justify-center">
            <Image className="w-fit" src={image} alt="Sunset in the mountains" />
            <div className="font-bold text-lg sm:text-xl mt-5">{title}</div>
            <p className="text-body mt-1">{description}</p>
        </div>
    )
}

export default Service