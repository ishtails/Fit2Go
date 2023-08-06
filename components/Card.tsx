type Props = {
    title: string,
    description: string,
}

const Card = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col lg:py-20 py-12 p-8 border rounded-lg bg-Slate shadow-lg">
            <div className="text-lg font-bold text-white sm:text-xl">{title}</div>
            <p className="mt-2 text-body">{description}</p>
        </div>
    )
}

export default Card