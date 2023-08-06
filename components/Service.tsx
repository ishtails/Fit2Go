import Image from "next/image"

type Props = {
    title: string,
    description: string,
    image: string
}

const Service = ({ title, description, image }: Props) => {
    return (
        <div className="flex flex-col justify-center p-8 border rounded-lg shadow-lg">
            <Image className="w-fit" src={image} alt="Sunset in the mountains" />
            <div className="mt-5 text-lg font-bold sm:text-xl">{title}</div>
            <p className="mt-1 text-body">{description}</p>
        </div>
    )
}

export default Service