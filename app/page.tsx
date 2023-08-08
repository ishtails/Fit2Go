import NavBar from "@/components/NavBar"
import { urlFor } from "@/helpers/helpers";
import Footer from "@/app/_pages/Footer";
import Gallery from "@/app/_pages/Gallery";
import Hero from "@/app/_pages/Hero";
import Objective from "@/app/_pages/Objective";
import Performance from "@/app/_pages/Performance";
import Services from "@/app/_pages/Services";
import Team from "@/app/_pages/Team";
import Testimonials from "@/app/_pages/Testimonials";
import WhyUs from "@/app/_pages/WhyUs";
import { getPictures, getTeamMembers, getTestimonials } from "@/sanity/utils";

const page = async () => {
  const pictureArray = await getPictures();
  const testimonials = await getTestimonials();
  const team = await getTeamMembers();
  
  return (
    <div className="overflow-x-clip">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute blur-[600px] bg-[#54BE96]/30 p-96 -z-10 -right-72 -top-56" />
        <Hero />
      </section>

      {/* Objective */}
      <section id="objective" className="">
        <Objective />
      </section>

      {/* Services */}
      <section id="services" className="">
        <Services />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="">
        <Testimonials array={testimonials}/>
      </section>

      {/* Performance */}
      <section id="performance" className="">
        <Performance />
      </section>

      {/* Why Us */}
      <section id="whyus" className="relative ">
        <div className="absolute blur-[1000px] bg-[#54BE96]/40 p-96 -z-10 -left-72 -top-56" />
        <WhyUs />
      </section>

      {/* Gallery */}
      <section id="gallery" className="">
        <Gallery array={pictureArray} />
      </section>

      {/* Team */}
      <section id="team" className="relative ">
        <div className="absolute blur-[400px] bg-[#54BE96]/30 p-96 -z-10 -right-44 -bottom-56" />
        <Team array={team}/>
      </section>

      {/* Footer */}
      <section id="footer" className="">
        <Footer />
      </section>
    </div>
  )
}

export default page