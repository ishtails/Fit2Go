'use client'

import NavBar from "@/components/NavBar"
import Hero from "@/pages/Hero";
import Objective from "@/pages/Objective";
import Services from "@/pages/Services";

// import { getPets } from "@/sanity/utils"

const getPets: any = async () => {
  const pets = await getPets();
  return pets;
}

const page = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <Hero />

      {/* Objective */}
      <Objective />

      {/* Services */}
      <Services />

      {/* Testimonials */}


      {/* Peak Performance */}


      {/* Why Us */}


      {/* Gallery */}


      {/* Team */}


      {/* Footer */}
    </div>
  )
}

export default page