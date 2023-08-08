import Service from "@/components/Service"
import services_1 from "@/assets/services_1.svg"
import services_2 from "@/assets/services_2.svg"
import services_3 from "@/assets/services_3.svg"
import services_4 from "@/assets/services_4.svg"
import services_5 from "@/assets/services_5.svg"
import services_6 from "@/assets/services_6.svg"

const Services = () => {
    return (
        <div id="services" className="h-full max-w-6xl mx-10 mt-24 xl:mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold font-lexend xl:text-6xl">
                Our Services
            </h2>
            <span className="justify-center ml-1 text-sm text-body lg:text-md xl:text-lg">
                A wide range of services that we provide
            </span>
            <div className="grid grid-cols-1 gap-10 mt-8 sm:grid-cols-2 lg:sm:grid-cols-3">
                <Service title="Physiotherapy & Rehabilitation" description="Reclaim mobility and recover from injuries with personalized physiotherapy and rehabilitation." image={services_1} />
                <Service title="Strength & Conditioning" description="Unlock your potential through tailored strength and conditioning programs for peak performance." image={services_2} />
                <Service title="Nutrition" description="Fuel your success with expert nutrition guidance for enhanced energy, recovery, and overall well-being." image={services_3} />
                <Service title="Psychology" description="Elevate your mental game with psychological support to optimize focus, resilience, and confidence." image={services_4} />
                <Service title="Medical Team" description="Access a dedicated medical team that understands athletes and is committed to your well-being." image={services_5} />
                <Service title="24x7 Support" description="Get round-the-clock assistance and guidance whenever you need it, ensuring your journey is fully supported." image={services_6} />
            </div>
        </div>
    )
}

export default Services