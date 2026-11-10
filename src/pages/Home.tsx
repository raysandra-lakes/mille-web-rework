import Hero from "../components/sections/Hero"
import BusinessProblem from "../components/sections/BusinessProblem"
import Ecosystem from "../components/sections/Ecosystem"
import OptiMilleSection from "../components/sections/OptiMille"
import SolusiSection from "../components/sections/Solusibisnis"
import PrimaryCTA from "../components/sections/PrimaryCTA"
import CustomerLogos from "../components/sections/CustomerLogos"
import Testimonial from "../components/sections/Testimonial"
import Blog from "../components/sections/Blog"
import FinalCTA from "../components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessProblem />
      <Ecosystem />
      <OptiMilleSection />
      <SolusiSection />
      <CustomerLogos />
      <Testimonial />
      <PrimaryCTA />
      <Blog />
      <FinalCTA />
    </>
  )
}
