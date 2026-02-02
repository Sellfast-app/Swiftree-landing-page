import Footer from "@/components/Footer"
import Business from "@/components/Sales/Business"
import Cta from "@/components/Sales/Cta"
import FAQ from "@/components/Sales/Faq"
import Header from "@/components/Sales/Header"
import Hero from "@/components/Sales/Hero"
import Problems from "@/components/Sales/Problems"
import Testimonials from "@/components/Sales/Testimonials"


const SalesPage = () => {
  return (
    <div className="min-h-screen bg-background">
        <Header/>
        <Hero/>
        <Testimonials/>
        <Problems/>
        <Business/>
        <FAQ/>
        <Cta/>
        <Footer/>
        </div>
  )
}

export default SalesPage