import Service from "@/components/Service"
import services_1 from "../assets/services_1.svg"
import services_2 from "../assets/services_2.svg"
import services_3 from "../assets/services_3.svg"
import services_4 from "../assets/services_4.svg"
import services_5 from "../assets/services_5.svg"
import services_6 from "../assets/services_6.svg"

const Services = () => {
    return (
        <div id="services" className="h-full mx-10 xl:mx-auto max-w-6xl mt-24">
            <h2 className="font-lexend font-bold text-4xl lg:text-5xl xl:text-6xl">
                Our Services
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:sm:grid-cols-3 gap-10">
                <Service title="Physiotherapy & Rehabilitation" description="Buy  your medicines with our mobile application with a simple delivery system" image={services_1} />
                <Service title="Strength & Conditioning" description="Buy  your medicines with our mobile application with a simple delivery system" image={services_2} />
                <Service title="Nutrition" description="Free consultation with our trusted doctors and get the best recomendations" image={services_3} />
                <Service title="Psychology" description="Free consultation with our trusted doctors and get the best recomendations" image={services_4} />
                <Service title="Medical Team" description="You can get 24/7 urgent care for yourself or your children and your lovely family" image={services_5} />
                <Service title="24x7 Support" description="You can get 24/7 urgent care for yourself or your children and your lovely family" image={services_6} />
            </div>
        </div>
    )
}

export default Services