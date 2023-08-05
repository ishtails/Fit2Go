import Testimonial from "@/components/Testimonial"

const Testimonials = () => {
    return (
        <div id="testimonial" className="flex flex-col items-center h-full mx-10 xl:mx-auto mt-24">
            <h2 className="text-center font-lexend font-bold text-4xl lg:text-5xl xl:text-6xl">
                Testimonials
            </h2>
            
            <div className="">
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </div>
    )
}

export default Testimonials