import Card from "@/components/Card"

const WhyUs = () => {
    return (
        <div id="services" className="h-full max-w-6xl mx-10 mt-24 xl:mx-auto">
            <h2 className="text-5xl text-end font-bold font-lexend xl:text-6xl">
                Why us?
            </h2>
            <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-3 lg:sm:grid-cols-3">
                <Card title="Holistic Approach" description="We believe in treating the root cause, not just the symptoms, and we offer personalized treatments, recognizing that every person is unique." />
                <Card title="Comprehensive Integration" description="Our services combine various elements of sports science to provide a well-rounded solution for athletes." />
                <Card title="One-Stop Solution" description="We offer a complete range of services to cater to all your performance needs, making it convenient for you to get the support you need." />
            </div>
        </div>
    )
}

export default WhyUs